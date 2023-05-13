import { BlockPos, Vec3 } from "bdsx/bds/blockpos";
import { ArmorSlot } from "bdsx/bds/inventory";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { ServerPlayer } from "bdsx/bds/player";
import { events } from "bdsx/event";
import { void_t } from "bdsx/nativetype";
import { procHacker } from "bdsx/prochacker";
import { NCBPdetection, AntiCheat, NoBandetection } from "../main";

const fly_b_Flags: Record<string, number> = {};
const lastY: Record<string, number> = {};
const joined: Record<string, boolean> = {};
const isTeleported: Record<string, boolean> = {};
const AirWalkStack: Record<string, number> = {};

events.packetAfter(1).on((pkt, ni) => {
    const req = pkt.connreq;
    if (!req) return;
    const cert = req.getCertificate();
    const plname = cert.getId();
    joined[plname] = true;
    setTimeout(async () => {
        joined[plname] = false;
    }, 15000);
})

events.playerJoin.on((ev)=> {
    const pl = ev.player;
    if (ev.isSimulated) return;

    const plname = pl.getNameTag();
    joined[plname] = true;
    setTimeout(async () => {
        joined[plname] = false;
    }, 10000);
});

events.packetBefore(MinecraftPacketIds.MovePlayer).on(async (pkt, ni) => {
    const pl = ni.getActor();
    if (!pl) return;
    pl.syncAbilities();
    if (pl.getInputMode() === 2) return;
    const plname = pl.getNameTag();
    const gamemode = pl.getGameType()!;
    const torso = pl.getArmor(ArmorSlot.Torso);
    if (typeof fly_b_Flags[plname] !== "number") fly_b_Flags[plname] = 0;
    if (typeof AirWalkStack[plname] !== "number") fly_b_Flags[plname] = 0;
    const onGround = pkt.onGround;
    const pos = pkt.pos;

    const x = pos.x;
    const y = pos.y-1.6;
    const z = pos.z

    if (joined[plname] === true) return;
    if (gamemode !== 2 && gamemode !== 0 && gamemode !== 5 || Math.floor(y) === -104) {
        lastY[plname] = y;
        fly_b_Flags[plname] = 0;
        return;
    };

    const region = pl.getRegion();

    if (region.getBlock(BlockPos.create(x, y, z)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x, y+1, z)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x, y-1, z)).getName() !== "minecraft:air"

    || region.getBlock(BlockPos.create(x-1, y-1, z-1)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x+1, y-1, z+1)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x-1, y-1, z+1)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x+1, y-1, z-1)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x+1, y-1, z)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x-1, y-1, z)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x, y-1, z+1)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x, y-1, z-1)).getName() !== "minecraft:air"

    || region.getBlock(BlockPos.create(x-1, y, z-1)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x+1, y, z+1)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x-1, y, z+1)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x+1, y, z-1)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x+1, y, z)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x-1, y, z)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x, y, z+1)).getName() !== "minecraft:air"
    || region.getBlock(BlockPos.create(x, y, z-1)).getName() !== "minecraft:air"
        || isTeleported[plname] === true
        ) {
        lastY[plname] = y;
        fly_b_Flags[plname] = 0;
        AirWalkStack[plname]--;
        if (AirWalkStack[plname] < 0) {
            AirWalkStack[plname] = 0;
        };
        return;
    };


    if (torso.getRawNameId() === "elytra") return;
    if (isTeleported[plname] === true) return;
    if (onGround === true) {
        AirWalkStack[plname]++;
    } else {
        AirWalkStack[plname]--;
        if (AirWalkStack[plname] < 0) {
            AirWalkStack[plname] = 0;
        };
    };

    if (AirWalkStack[plname] > 9) {
        AirWalkStack[plname] = 0;
        return NoBandetection(ni, "Fly-C", "AirWalk");
    };

    if (typeof lastY[plname] !== "number") { lastY[plname] = y; }
    if (lastY[plname] === y) fly_b_Flags[plname]++;
    else fly_b_Flags[plname]--;
    if (fly_b_Flags[plname] < 0) fly_b_Flags[plname] = 0;
    if (fly_b_Flags[plname] > 14) {
        fly_b_Flags[plname] = 0;
        return NCBPdetection(ni, AntiCheat.Movement.Fly.B.name, AntiCheat.Movement.Fly.B.description);
    };

    lastY[plname] = y;
})

const hasTeleport = procHacker.hooking("?teleportTo@Player@@UEAAXAEBVVec3@@_NHH1@Z", void_t, null, ServerPlayer, Vec3)((pl, pos) => {
    const plname = pl.getNameTag()!;
    isTeleported[plname] = true;
    setTimeout(async () => {
        isTeleported[plname] = false;
    }, 1000);

    return hasTeleport(pl, pos);
});