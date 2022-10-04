


import React from 'react'
import { useQuery } from '@apollo/client';
import { getData } from "./Queries/Query";



export default function StreamMetaData() {

    const { loading, error, data } = useQuery(getData);
    console.log(data);
    if (loading) return "Loading...";
    console.log(error)
    if (error) return `Error! ${error.message}`;

    return (
        <div>QueryData</div>
    )
}

