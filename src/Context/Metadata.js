import { createContext } from "react";
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { getData } from "../Queries/Query";
import { finalLiveData } from "../Api/helpers";
import { nackPackets, recvPackets, sourceBitrate, sourcePing, lostPackets, registry } from '../Metrics/customMetrics';
import axios from "axios";
import config from '../constants/config';

export const MetadataContext = createContext()
export default function StreamMetaData({ children }) {
    const [glimeshData, setGlimeshData] = useState([])
    const { loading, error, data, refetch } = useQuery(getData, {
        pollInterval: 5000,
        notifyOnNetworkStatusChange: false
    });
    const metricsData = () => {
        glimeshData.map((users) => {
            return users.followingLiveChannels.map((channel) => {
                lostPackets.observe(channel.stream.metadata.lostPackets);
                nackPackets.observe(channel.stream.metadata.nackPackets);
                recvPackets.observe(channel.stream.metadata.recvPackets);
                sourceBitrate.observe(channel.stream.metadata.sourceBitrate);
                sourcePing.observe(channel.stream.metadata.sourcePing);

                const metrics = registry.metrics()
                console.log(metrics);
                if (config.pushgateway === '') {

                } else {
                    axios.post(config.pushgateway, {
                        body: metrics,
                    })
                }
            })
        })
    }
    useEffect(() => {
        setInterval(() => {
            refetch()
        }, 6000);

    }, [])
    const updateData = (updated) => {
        setGlimeshData(updated)
    }
    useEffect(() => {
        finalLiveData(data, updateData)
    }, [data])
    useEffect(() => {
        metricsData()
    }, [glimeshData])
    if (loading) return "Loading...";
    if (error) console.log(JSON.stringify(error));

    return (
        <MetadataContext.Provider value={glimeshData}>
            {children}
        </MetadataContext.Provider>
    )
}
