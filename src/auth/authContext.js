import { createContext } from "react";
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { getData } from "../Queries/Query";
import { finalLiveData } from "../Api/helpers";

export const AuthContext = createContext()
export default function StreamMetaData({ children }) {
    const [glimeshData, setGlimeshData] = useState([])
    const { loading, error, data, refetch } = useQuery(getData, {
        pollInterval: 5000,
        notifyOnNetworkStatusChange: false
    });
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
    if (loading) return "Loading...";
    if (error) console.log(JSON.stringify(error));

    return (
        <AuthContext.Provider value={glimeshData}>
            {children}
        </AuthContext.Provider>
    )
}
