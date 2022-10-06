import { useSubscription } from '@apollo/client';
import React from 'react'
import { channelTitle } from './Subscriptions/ChannelSubs';


export default function ChannelTitle() {

    const { Channeldata, loading, error } = useSubscription(
        channelTitle,

    );
    if (error) console.log(JSON.stringify(error))
    return <h4>New comment: {!loading && Channeldata}</h4>;

}
