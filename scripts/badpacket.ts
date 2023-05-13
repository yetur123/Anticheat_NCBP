import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { PackType, TextPacket } from "bdsx/bds/packets";
import { abstract, CANCEL } from "bdsx/common";
import { VoidPointer } from "bdsx/core";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { AbstractClass, nativeClass, nativeField } from "bdsx/nativeclass";
import { bool_t, int32_t, void_t } from "bdsx/nativetype";
import { CxxStringWrapper } from "bdsx/pointer";
import { procHacker } from "bdsx/prochacker";
import { AntiCheat, NCBPdetection } from "../main";

events.playerAttack.on(async (ev)=> {
    const pl = ev.player;
    const vic = ev.victim;
    if (!vic.isPlayer()) return;
    const plni = pl.getNetworkIdentifier()!;
    const vicni = vic.getNetworkIdentifier()!;

    if (plni === vicni) {
        return NCBPdetection(plni, AntiCheat.Misc.BadPacket.SelfHit.name, AntiCheat.Misc.BadPacket.SelfHit.description);
    };
});

events.packetBefore(MinecraftPacketIds.Text).on((pkt, ni)=> {
     if (pkt.type !== TextPacket.Types.Chat) {
        return NCBPdetection(ni, AntiCheat.Misc.BadPacket.IllegalChatType.name, AntiCheat.Misc.BadPacket.IllegalChatType.description);
     };

     const plname = ni.getActor()!.getNameTag()!;

     if (plname !== pkt.name) {
        return NCBPdetection(ni, AntiCheat.Misc.BadPacket.MismatchChatName.name, AntiCheat.Misc.BadPacket.MismatchChatName.description);
     };
});

