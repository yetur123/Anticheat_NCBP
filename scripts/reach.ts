import { AntiCheat, NoBandetection } from "../main";
import { events } from "bdsx/event";
import { CANCEL } from "bdsx/common";
import { ActorDamageCause } from "bdsx/bds/actor";
const reachwarn: Record<string, number> = {};


events.entityKnockback.on(async (ev)=> {
    const vic = ev.target;
    const pl = vic.getLastHurtByMob();
    if (!vic.isPlayer()) return;
    if (!pl) return;
    if (!pl!.isPlayer()) return;
    if (vic.getLastHurtCause() !== ActorDamageCause.EntityAttack) return;

    const gamemode = pl.getGameType()!;
    if (gamemode === 1) return;

    const pos = pl.getFeetPos()!;
    const x = pos.x;
    const z = pos.z;

    const vicpos = vic.getFeetPos()!;

    const vx = vicpos.x;
    // const vy = vicpos.y;
    const vz = vicpos.z;

    const result1 = Math.pow(x - vx, 2);
    const result2 = Math.pow(z - vz, 2);
    const reach = Number(Math.sqrt(result1 + result2).toFixed(2));
    const plname = pl.getNameTag()!;
    if (reach > 4.21) {
        if (typeof reachwarn[plname] !== "number") {
            reachwarn[plname] = 0;
        };

        reachwarn[plname]++;

        if (reachwarn[plname] > 3) {
            const ni = pl.getNetworkIdentifier()!;
            reachwarn[plname] = 0;
            return NoBandetection(ni, AntiCheat.Combat.Reach.name, AntiCheat.Combat.Reach.description + " | Reach : "+reach);
        };

        setTimeout(async () => {
            reachwarn[plname]--;
            if (reachwarn[plname] < 0) {
                reachwarn[plname] = 0;
            };
        }, 7500);

        return CANCEL;
    };
});