import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";
import { NoBandetection, AntiCheat } from "../main";

const lastHeadrotation: Record<string, number> = {};
const aurawarn1: Record<string, number> = {};
const aurawarn2: Record<string, number> = {};

events.playerAttack.on(async (ev) => {
    const player = ev.player;
    if (!player) return;
    const vic = ev.victim;
    if (!vic.isPlayer()) return;
    const plname = player.getNameTag()!;

    if (player.getCommandPermissionLevel() > 0) return;
    if (player.getGameType() === 1) return;
    
    const ni = player.getNetworkIdentifier()!;
    if (!player.canSee(vic)) {
        if (typeof aurawarn2[plname] !== "number") {
             aurawarn2[plname] = 0;
        };

        aurawarn2[plname]++;
        setTimeout(async () => {
            aurawarn2[plname]--;
            if (aurawarn2[plname] < 0) aurawarn2[plname] = 0;
        }, 5000);

        if (aurawarn2[plname] > 5) {
            return NoBandetection(ni, AntiCheat.Combat.Aura.name, "Attck Through Wall");
        };
    };

    // if (!player.canAttack(vic)) {
    //     return NoBandetection(ni, AntiCheat.Combat.Aura.name, AntiCheat.Combat.Aura.description);
    // };

    // const pos = player.getFeetPos()!;
    // const x = pos.x;
    // const z = pos.z;

    // const vicpos = vic.getFeetPos()!;

    // const vx = vicpos.x;
    // const vz = vicpos.z;

    //const result1 = Math.abs(Math.pow(x - vx, 2));
    //const result2 = Math.abs(Math.pow(z - vz, 2));
    //const reach = Math.sqrt(result1 + result2);
});

events.packetBefore(MinecraftPacketIds.MovePlayer).on(async (pkt, ni) => {
    const pl = ni.getActor();
    if (!pl) return;
    const plname = pl.getNameTag();
    const y = pkt.headYaw;

    lastHeadrotation[plname] = y;
});

// events.playerAttack.on((ev)=> {
//     // const player = ev.player;
//     // if (!player) return;
//     // const vic = ev.victim;
//     // if (!vic.isPlayer()) return;
// });