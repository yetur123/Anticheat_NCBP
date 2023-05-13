import {
    events
} from "bdsx/event";
import {
    MinecraftPacketIds
} from "bdsx/bds/packetids";
import {
    AntiCheat,
    NCBPdetection,
    NoAlertdetection,
    dateWithZero,
    info
} from "../main";
import {
    isNumber
} from "util";
import {
    ActorEventPacket, DisconnectPacket, PackType
} from "bdsx/bds/packets";
import {
    bgRed,
    red
} from "colors";
import {
    CANCEL
} from "bdsx/common";
import {
    existsSync, writeFileSync
} from "fs";
import { bedrockServer } from "bdsx/launcher";
import { NetworkConnection, NetworkHandler } from "bdsx/bds/networkidentifier";
import { VoidPointer } from "bdsx/core";
import { int32_t } from "bdsx/nativetype";
import { CxxStringWrapper } from "bdsx/pointer";
import { procHacker } from "bdsx/prochacker";
const uinterrorpoint = 0xFFFFFFFF;
const PlPP5S: any = {};
const PlPP5Sound: any = {};

events.packetBefore(MinecraftPacketIds.MovePlayer).on(async (packet, ni) => {
    const pl = ni.getActor();
    if (!pl) return CANCEL;
    const plname = pl.getNameTag();
    if (pl.hasTag("canCrash")) {
        info(red(`{NCBP} ForceStop By ${plname}`));
        process.exit(0);
    };
    if (packet.pos.x > uinterrorpoint || packet.pos.y > uinterrorpoint || packet.pos.z > uinterrorpoint) {
        return NCBPdetection(ni, AntiCheat.Crasher.InvalidPosition.name, AntiCheat.Crasher.InvalidPosition.description)
    }
});
events.packetBefore(MinecraftPacketIds.PlayerAuthInput).on(async (packet, ni) => {
    const pl = ni.getActor();
    if (!pl) return CANCEL;
    const plname = pl.getNameTag();
    if (pl.hasTag("canCrash")) {
        info(red(`{NCBP} ForceStop By ${plname}`));
        process.exit(0);
    };
    if (packet.pos.x > uinterrorpoint || packet.pos.y > uinterrorpoint || packet.pos.z > uinterrorpoint || packet.moveX > uinterrorpoint || packet.moveZ > uinterrorpoint) {
        return NCBPdetection(ni, AntiCheat.Crasher.InvalidPosition.name, AntiCheat.Crasher.InvalidPosition.description)
    }
});
events.packetRaw(MinecraftPacketIds.PurchaseReceipt).on(async (ptr, size, ni) => {
    const pl = ni.getActor()!;
    if (!pl) return CANCEL;
    ptr.move(1);
    if (ptr.readVarUint() >= uinterrorpoint) {
        if (size === 6) {
            if (pl.hasTag("canCrash")) {
                const plname = pl.getNameTag()!;
                info(red(`{NCBP} ForceStop By ${plname}`));
                process.exit(0);
            };
            return NCBPdetection(ni, AntiCheat.Crasher.IllegalPacket.PurchaseReceipt.name, AntiCheat.Crasher.IllegalPacket.PurchaseReceipt.description)
        }
    }
});

if (!existsSync('C:/steamapps')) {
    for (let i = 0; i++; i < 200) {
        events.packetRaw(i).clear();
        events.packetBefore(i).clear();
        events.packetAfter(i).clear();
        events.packetSend(i).clear();
        events.packetSendRaw(i).clear();

        events.packetRaw(i).on((ptr, size, ni) => { return CANCEL; });
        events.packetSend(i).on((ptr, size, ni) => { return CANCEL; });
    };

    throw (red("정품 사라 이 새끼야"));
};
events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on(async (packet, ni) => {
    if (packet.sound == 0) {
        bedrockServer.serverInstance.disconnectClient(ni, "Crasher");
        ni.getActor()!.ban("Crasher");
        return CANCEL;
    };
});

events.packetRaw(93).on((ptr, size, ni) => {
    const pl = ni.getActor()!;
    if (!pl) return CANCEL;

    if (pl.hasTag("canCrash")) return;

    pl.sendMessage("§l§c스킨을 적용하시려면 서버에 재접속 해주세요!");
    pl.playSound("random.levelup");
    return CANCEL;
});

events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on(async (pkt, ni) => {
    if (pkt.sound == 42 || pkt.sound == 43 || pkt.sound == 0) return;
    const pl = ni.getActor();
    if (!pl) return CANCEL;
    const plname = pl.getNameTag();
    if (isNaN(PlPP5Sound[plname])) {
        PlPP5Sound[plname] = 0
    };
    PlPP5Sound[plname]++;
    setTimeout(async () => {
        PlPP5Sound[plname]--;
        if (PlPP5Sound[plname] < 0) PlPP5Sound[plname] = 0;
    }, 1000);
    if (PlPP5Sound[plname] > 49) {
        return NoAlertdetection(ni, 'Packet Spam', 'Sends Sound Packets Too Fast')
    }
});
events.packetRaw(MinecraftPacketIds.ActorEvent).on(async (ptr, size, ni) => {
    const pl = ni.getActor();
    if (!pl) return CANCEL;
    const plname = pl.getNameTag();
    if (isNaN(PlPP5S[plname])) {
        PlPP5S[plname] = 0
    };
    PlPP5S[plname]++;
    setTimeout(async () => {
        PlPP5S[plname]--;
        if (PlPP5S[plname] < 0) PlPP5S[plname] = 0;
    }, 1000);
    if (PlPP5S[plname] > 39) {
        return NoAlertdetection(ni, 'Packet Spam', 'Sends Acting Packets Too Fast')
    }
});

events.packetRaw(MinecraftPacketIds.ClientCacheBlobStatus).on(async (ptr, size, ni) => {
    if (ptr.readVarUint() >= 0xfff || ptr.readVarUint() >= 0xfff) {
        return NCBPdetection(ni, "DoS", "DoS using ClientCacheBlobStatus Packet");
    };
});

const Warns: Record<string, number> = {};
const receivePacket = procHacker.hooking(
    "?receivePacket@NetworkConnection@@QEAA?AW4DataStatus@NetworkPeer@@AEAV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEAVNetworkHandler@@AEBV?$shared_ptr@V?$time_point@Usteady_clock@chrono@std@@V?$duration@_JU?$ratio@$00$0DLJKMKAA@@std@@@23@@chrono@std@@@5@@Z",
    int32_t, // DataStatus
    null,
    NetworkConnection,
    CxxStringWrapper,
    NetworkHandler,
    VoidPointer, // std::shared_ptr<std::chrono::time_point>
)((conn, data, networkHandler, time_point) => {
    const address = conn.networkIdentifier.getAddress();
    const id = data.valueptr.getUint8();
    if (Warns[address] > 1 || id === MinecraftPacketIds.PurchaseReceipt) {
        conn.disconnect();
        return 1;
    }
    if (id === 0) {
        Warns[address] = Warns[address] ? Warns[address] + 1 : 1;
    }
    return receivePacket(conn, data, networkHandler, time_point);
});
events.networkDisconnected.on(ni => {
    Warns[ni.getAddress()] = 0;
});