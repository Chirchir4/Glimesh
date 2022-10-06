import React from 'react'
import { Table } from 'semantic-ui-react'
import { useContext } from 'react'
import { MetadataContext } from './Metadata'


export const TableExampleCelled = () => {
    const context = useContext(MetadataContext)


    const glimeshData = context?.map((items) => {
        return (

            <div className="card">

                <h2>{items.username}</h2>
                <h2>{items.id}</h2>

                <Table celled>
                    <Table.Header>
                        <Table.Row>

                            <Table.HeaderCell>Lost Packets</Table.HeaderCell>
                            <Table.HeaderCell>Nack Packets</Table.HeaderCell>
                            <Table.HeaderCell>Received Packets</Table.HeaderCell>
                            <Table.HeaderCell>Source Bitrate</Table.HeaderCell>
                            <Table.HeaderCell>Source Ping</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell>None</Table.Cell>
                            <Table.Cell>None</Table.Cell>
                            <Table.Cell>None</Table.Cell>
                        </Table.Row>

                    </Table.Body>


                </Table>
            </div>
        )
    })

    return (
        <div>
            {glimeshData}
        </div>
    )

}
