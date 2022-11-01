
import prom from 'promjs';

export const registry = prom()

export const nackPackets = registry.create('histogram', 'nack_Packets', 'Nack packets', [
    200,
    300,
    400,
    500
]);
export const lostPackets = registry.create('histogram', 'lost_Packets', 'Lost packets', [
    200,
    300,
    400,
    500
]);
export const recvPackets = registry.create('histogram', 'recv_Packets', 'Recv packets', [
    200,
    300,
    400,
    500
]);
export const sourcePing = registry.create('histogram', 'source_Ping', 'Source ping', [
    200,
    300,
    400,
    500
]);
export const sourceBitrate = registry.create('histogram', 'source_Bitrate', 'Source Bitrate', [
    200,
    300,
    400,
    500
]);






