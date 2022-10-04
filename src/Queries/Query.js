import { gql } from "@apollo/client";

export const getData = gql`
query getData {
	users(first:5){
		edges{
			node{
				username
				id
				channel{
					streams{
						edges{
							node{
								metadata{
									edges{
										node{
											id
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