import { gql } from "@apollo/client";

export const getData = gql`
query {
	users{
		edges{
			node{
				username
				id
				followingLiveChannels{
					edges{
						node{
							id
							stream{
								endedAt
								metadata{
									edges{
										node{
											id
											updatedAt
											ingestServer
											insertedAt
											ingestServer
											videoCodec
											videoHeight
											videoWidth
											vendorVersion
											streamTimeSeconds
											videoWidth
											nackPackets
											sourcePing
											sourceBitrate
											lostPackets
											recvPackets
										}
									}
								}
							}
						}
					}
				}
				
			}
		}
}
}
`