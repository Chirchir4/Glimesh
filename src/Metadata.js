import { createContext } from "react";
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { getData } from "./Queries/Query";
import { extractCorrectData } from './helpers';


export const MetadataContext = createContext()

export default function StreamMetaData({ children }) {
    const [glimeshData, setGlimeshData] = useState([])
    const { loading, error, data } = useQuery(getData);

    const updateData = (updated) => {
        setGlimeshData(updated)
    }
    useEffect(() => {
        extractCorrectData(data, updateData)
    }, [data])

    useEffect(() => {
        console.log(glimeshData)
    }, [glimeshData])

    if (loading) return "Loading...";

    if (error) console.log(JSON.stringify(error));

    return (
        <MetadataContext.Provider value={glimeshData}>
            {children}
        </MetadataContext.Provider>
    )
}
