import React from 'react'
import { Table } from 'semantic-ui-react'
import { useContext } from 'react'
import { MetadataContext } from './Metadata'


export const TableExampleCelled = () => {
    const context = useContext(MetadataContext)

    console.log("llllllllllllllllllll", context)
    const glimeshData = context?.map((user, index) => {
        return (

            <Table.Body>
                <Table.Row>
                    <Table.Cell>{user.id}</Table.Cell>
                    <Table.Cell>{user.username}</Table.Cell>
                    {user.followingLiveChannels.map((channel) => {
                        return (
                            <div key={index}>
                                <Table.Cell>{channel.stream.metadata.lostpackets}</Table.Cell>
                                <Table.Cell>{channel.stream.metadata.nackPackets}</Table.Cell>
                                <Table.Cell>{channel.stream.metadata.recvPackets}</Table.Cell>
                                <Table.Cell>{channel.stream.metadata.sourceBitrate}</Table.Cell>
                                <Table.Cell>{channel.stream.metadata.sourcePing}</Table.Cell>

                            </div>
                        )

                    })

                    }

                </Table.Row>


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
                        <Table.HeaderCell>Lost Packets</Table.HeaderCell>
                        <Table.HeaderCell>Nack Packets</Table.HeaderCell>
                        <Table.HeaderCell>Received Packets</Table.HeaderCell>
                        <Table.HeaderCell>Source Bitrate</Table.HeaderCell>
                        <Table.HeaderCell>Source Ping</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                {glimeshData}

            </Table>

        </div>
    )


}
