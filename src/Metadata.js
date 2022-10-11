import { createContext } from "react";
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { getData } from "./Queries/Query";
import { finalLiveData } from "./helpers";




export const MetadataContext = createContext()

export default function StreamMetaData({ children }) {
    const [glimeshData, setGlimeshData] = useState([])
    const { loading, error, data } = useQuery(getData);
    console.log(data)


    const updateData = (updated) => {
        setGlimeshData(updated)
    }
    useEffect(() => {
        finalLiveData(data, updateData)
        console.log(data)
    }, [data])

    useEffect(() => {
        console.log("glimeeeesh", glimeshData)

    }, [glimeshData])

    if (loading) return "Loading...";

    if (error) console.log(JSON.stringify(error));



    return (
        <MetadataContext.Provider value={glimeshData}>
            {children}
        </MetadataContext.Provider>
    )
}
