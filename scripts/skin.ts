import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { TrustedSkinFlag } from "bdsx/bds/skin";
import { events } from "bdsx/event";
import { AntiCheat, NoKickdetection } from "../main";

events.playerJoin.on((ev)=> {
    const pl = ev.player;
    const plskin = pl.getSkin()!;
    const skin = plskin.skinImage;
    const isTrusted = plskin.isTrustedSkin;
    if (isTrusted === TrustedSkinFlag.True) return;

    const height = skin.height;
    const width = skin.width;
    const ni = pl.getNetworkIdentifier()!;

    if (height !== 64 && width !== 64 && height !== 128 && width !== 128 && height !== 256 && width !== 256) {
        NoKickdetection(ni, AntiCheat.Misc.InvisibleSkin.name, AntiCheat.Misc.InvisibleSkin.description);
    };
});

events.packetBefore(MinecraftPacketIds.PlayerSkin).on((pkt, ni, id)=> {
    const plskin = pkt.skin!;
    const skin = plskin.skinImage; 
    const height = skin.height; 
    const width = skin.width;

    const isTrusted = plskin.isTrustedSkin;
    if (isTrusted === TrustedSkinFlag.True) return;

    if (height !== 64 && width !== 64 && height !== 128 && width !== 128 && height !== 256 && width !== 256) {
        return NoKickdetection(ni, AntiCheat.Misc.InvisibleSkin.name, AntiCheat.Misc.InvisibleSkin.description);
    };
});