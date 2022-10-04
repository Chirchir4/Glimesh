import React from 'react'

import { useState, useEffect } from 'react';
import { getToken } from './auth/auth';




export default function AuthorizationToken() {
    const [data, setData] = useState([])

    useEffect(async () => {
        const Token = JSON.parse(localStorage.getItem('credentials'))
        if (Token) {
            console.log("token exists", Token)
        }
        else {
            const dt = await getToken()
            if (dt.access_token) {
                setData(dt)
                localStorage.setItem('credentials', JSON.stringify(dt));
                console.log("token stored successfully", dt)
            }
        }
    }, []);

    return (
        <div>GetAuthorizationToken</div>
    )
}
