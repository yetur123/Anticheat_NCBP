import { BlockPos } from "bdsx/bds/blockpos";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";

const exceptblocklist = ["door", "sign", "button", "scaffold", "vine", "fence", "wall", "carpet", "pressure", "pane", "ladder", "bamboo", "chain",
    "structure_void", "light_block", "water", "lava", "snow", "web", "redstone", "bars", "pointed_dripstone", "slab", "daylight", "cake", "lantern", "lever", "rail", "vein", "stairs", "lichen", "amethyst", "brewing", "item_frame", "cauldron", "candle"];

events.packetBefore(MinecraftPacketIds.MovePlayer).on((pkt, ni) => {
    const pl = ni.getActor();
    if (!pl) return;

    const gamemode = pl.getGameType();

    if (gamemode == 1 || gamemode == 3 || gamemode == 4 || gamemode == 6) return;
    if (pl.isRiding()) return;

    const region = pl.getRegion();
    const bpos = BlockPos.create(pkt.pos);
    const bpos2 = BlockPos.create(pkt.pos.x, pkt.pos.y - 1, pkt.pos.z);
    const block1 = region.getBlock(bpos);
    const block2 = region.getBlock(bpos2);
    const cantThrough = block1.canHurtAndBreakItem();
    const cantThrough2 = block2.canHurtAndBreakItem();

    if (cantThrough === true && cantThrough2 === true) {
        const block1name = block1.getName();
        const block2name = block2.getName();

        for (let i = 0; i < exceptblocklist.length; i++) {
            if (block1name.includes(exceptblocklist[i]) == true) return;
            if (block2name.includes(exceptblocklist[i]) == true) return;
        }
        pl.runCommand(`tp ~ ~ ~`);
    }
});