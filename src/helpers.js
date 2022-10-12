
export const finalLiveData = (rawData, updateData) => {
    if (!rawData) {
        return
    }
    let users = []
    rawData.users.edges.forEach((user, userIndex) => {
        let liveChannel = []
        user.node.followingLiveChannels.edges.forEach((channels, channelIndex) => {
            let metaList = []
            channels.node.stream.metadata.edges.forEach((meta, metaIndex) => {
                metaList.push({
                    ...meta.node
                })
                if ((metaIndex + 1) >= channels.node.stream.metadata.edges.length) {
                    const sortData = metaList.sort((a, b) => { return new Date(b.updatedAt) - new Date(a.updatedAt) });
                    liveChannel.push({
                        ...channels.node,
                        stream: {
                            ...channels.node.stream,
                            metadata: sortData[0]
                        }
                    })

                    if ((channelIndex + 1) >= user.node.followingLiveChannels.edges.length) {

                        users.push({
                            ...user.node,
                            followingLiveChannels: liveChannel
                        })
                        updateData(users)
                    }
                }
            })
        })
    })
}
