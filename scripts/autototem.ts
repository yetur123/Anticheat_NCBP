import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { InteractPacket } from "bdsx/bds/packets.js";
import { CANCEL } from "bdsx/common.js";
import { events } from "bdsx/event";
import { NCBPdetection, NoBandetection } from "../main.js"

const isOpenedInventory: Record<string, boolean> = {};
const opendTick: Record<string, number> = {};

events.packetAfter(1).on((pkt, ni, id)=> {
    const req = pkt.connreq;
    if (!req) return;

    const plname = req.getCertificate().getId();
    isOpenedInventory[plname] = true;
    setTimeout(() => {
        isOpenedInventory[plname] = false;
    }, 15000);
});

events.packetBefore(33).on((pkt, ni, id)=> {
    const pl = ni.getActor()!;
    const plname = pl.getNameTag();

    if (pkt.action == InteractPacket.Actions.OpenInventory) { 
        isOpenedInventory[plname] = true;
        opendTick[plname] = pl.getLevel().getCurrentTick();
    };
});

events.packetBefore(MinecraftPacketIds.MobEquipment).on(async(pkt, ni, id)=> {
    if (pkt.containerId == 119) {
        if (pkt.slot == 1) {
            const pl = ni.getActor()!;
            const plname = pl.getNameTag();
            const tick = pl.getLevel().getCurrentTick();
            if (isOpenedInventory[plname] !== true) {
                return NoBandetection(ni, "Auto-Totem", "Equipped Totem before open inventory")
            };

            if (tick - opendTick[plname] < 2) { 
                return NoBandetection(ni, "Auto-Totem", "Too fast to equipping totem")
            };
        };
    };
});

events.packetRaw(MinecraftPacketIds.ContainerClose).on((ptr, size, ni, id)=> {
    const pl = ni.getActor()!;
    const plname = pl.getNameTag();

    isOpenedInventory[plname] = false;
})