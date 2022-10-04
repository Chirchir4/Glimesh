import { gql } from "@apollo/client";

export const getData = gql`
query {
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