import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { getData } from "./Queries/Query";

import { extractCorrectData } from './helpers';



export default function StreamMetaData() {
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

    if (error) return `Error! ${error.message}`;


    return (
        <div>QueryData</div>
    )
}

