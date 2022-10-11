
//////////livedata
export const finalLiveData = (rawData, updateData) => {

    if (!rawData) {
        return
    }
    console.log("raw", rawData)
    let users = []
    rawData.users.edges.forEach((user, userIndex) => {
        let liveChannel
        let metaList = []
        user.node.followingLiveChannels.edges[0]?.node.stream.metadata.edges.forEach((meta, metaIndex) => {
            metaList.push({
                ...meta.node
            })
            if ((metaIndex + 1) >= user.node.followingLiveChannels.edges[0].node.stream.metadata.edges.length) {
                const sortData = metaList.sort((a, b) => { return new Date(b.updatedAt) - new Date(a.updatedAt) });
                liveChannel = {
                    ...user.node.followingLiveChannels.edges[0].node,
                    stream: {
                        ...user.node.followingLiveChannels.edges[0].node.stream,
                        metadata: sortData[0]
                    }
                }
                users.push({
                    ...user.node,
                    followingLiveChannels: [
                        liveChannel
                    ]
                })
            }
        })

        if ((userIndex + 1) >= rawData.users.edges.length) {
            console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", users)
            updateData(users)
        }
    })

}
