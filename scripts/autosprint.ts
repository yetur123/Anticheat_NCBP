import { PlayerActionPacket } from "bdsx/bds/packets";
import { events } from "bdsx/event";
import { NoBandetection } from "../main";

const sprintStack: Record<string, number> = {};

events.packetBefore(36).on((pkt, ni)=> {
    const pl = ni.getActor()!;
    if (!pl) return;

    const plname = pl.getNameTag();
    if (typeof sprintStack[plname] !== "number") sprintStack[plname] = 0;
    if (pkt.action === PlayerActionPacket.Actions.StartBreak) {
        sprintStack[plname]++;

        if (sprintStack[plname] > 39) {
            return NoBandetection(ni, "Auto-Sprint", "Auto-Sprinting");
        };

        setTimeout(async () => {
            sprintStack[plname] = 0;
        }, 1000);
    };
});