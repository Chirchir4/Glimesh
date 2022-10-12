import React, { useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import { useContext } from 'react'
import { MetadataContext } from './Metadata'
import { useState } from 'react'



export const TableExampleCelled = () => {

    const context = useContext(MetadataContext)

    const glimeshData = () => context?.map((user, index) => {
        return (
            <Table.Body>
                {user.followingLiveChannels.map((channel, index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{user.id}</Table.Cell>
                            <Table.Cell>{user.username}</Table.Cell>
                            <Table.Cell>{channel.title}</Table.Cell>
                            <Table.Cell>{channel.stream.metadata.lostPackets}</Table.Cell>
                            <Table.Cell>{channel.stream.metadata.nackPackets}</Table.Cell>
                            <Table.Cell>{channel.stream.metadata.recvPackets}</Table.Cell>
                            <Table.Cell>{channel.stream.metadata.sourceBitrate}</Table.Cell>
                            <Table.Cell>{channel.stream.metadata.sourcePing}</Table.Cell>
                        </Table.Row>
                    )
                })
                }
            </Table.Body>
        )
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Streamer Id</Table.HeaderCell>
                        <Table.HeaderCell>User Name</Table.HeaderCell>
                        <Table.HeaderCell>Channel Title</Table.HeaderCell>
                        <Table.HeaderCell>Lost Packets</Table.HeaderCell>
                        <Table.HeaderCell>Nack Packets</Table.HeaderCell>
                        <Table.HeaderCell>Received Packets</Table.HeaderCell>
                        <Table.HeaderCell>Source Bitrate</Table.HeaderCell>
                        <Table.HeaderCell>Source Ping</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                {glimeshData()}

            </Table>

        </div>
    )


}
