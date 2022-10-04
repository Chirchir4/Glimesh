
export const extractCorrectData = (rawData, updateData) => {
    const users = []
    if (!rawData) {
        return
    }
    rawData.users.edges.forEach((user, userIndex) => {
        let streamList = []
        user.node.channel.streams.edges.forEach((stream, streamIndex) => {
            let metaList = []
            stream.node.metadata.edges.forEach((meta, metaIndex) => {
                metaList.push(meta.node)
                if ((metaIndex + 1) >= stream.node.metadata.edges.length) {
                    streamList.push({
                        ...stream.node,
                        metadata: metaList
                    })
                }
            })
            if ((streamIndex + 1) >= user.node.channel.streams.edges.length) {
                users.push({
                    username: user.node.username,
                    id: user.node.id,
                    channel: {
                        ...user.node.channel,
                        streams: streamList
                    }
                })
            }
        })

        if ((userIndex + 1) >= users.length) {
            updateData(users)
        }
    });
}