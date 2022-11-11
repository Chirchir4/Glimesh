// import React,from 'react'
import { Table } from 'semantic-ui-react'
import { useContext } from 'react'
import { MetadataContext } from '../Context/Metadata'




export const TableExampleCelled = () => {
    const context = useContext(MetadataContext)
    const glimeshData = () => context?.map((user, index) => {
        return (
            <>
                <div style={styleSheet.header}>
                    <div style={styleSheet.label}>Streamer: <span style={styleSheet.span}>{user.username}</span></div>
                    <div style={styleSheet.label}>Id: <span style={styleSheet.span}>{user.id}</span></div>
                </div>
                <Table celled style={{ marginBottom: "35px", marginTop: '0px', width: "70%" }} key={index}>
                    <Table.Header style={{ backgroundColor: 'grey' }}>
                        <Table.Row >
                            <Table.HeaderCell>Channel Title</Table.HeaderCell>
                            <Table.HeaderCell>Lost Packets</Table.HeaderCell>
                            <Table.HeaderCell>Nack Packets</Table.HeaderCell>
                            <Table.HeaderCell>Received Packets</Table.HeaderCell>
                            <Table.HeaderCell>Source Bitrate</Table.HeaderCell>
                            <Table.HeaderCell>Source Ping</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body key={index}>
                        {user.followingLiveChannels.map((channel, index) => {
                            return (
                                <Table.Row key={index} >
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
                </Table>
            </>
        )
    })
    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "center"
        }}>
            {glimeshData()}
        </div>
    )
}
const styleSheet = {
    span: {
        fontSize: '20px',
        color: "snow",
        marginLeft: "10px"
    },
    label: {
        fontSize: "24px",
        fontWeight: 'bold',
        color: "#dfe6e9"
    },
    header: {
        backgroundColor: '#00b894',
        height: "50px",
        color: 'snow',
        fontSize: "20px",
        width: "70%",
        alignSelf: 'center',
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
}
