import{MinecraftPacketIds}from"bdsx/bds/packetids";import{events}from"bdsx/event";import{AntiCheat,NCBPdetection}from"../main";events.packetBefore(MinecraftPacketIds.Text).on((pkt,ni)=>{const text=pkt.message;const pl=ni.getActor()!;if(text.endsWith("(github.com/disepi/ambrosial)")&&text.includes("Ambrosial")&&text.includes("Zephyr")&&text.startsWith("[")&&text.includes("]")){return NCBPdetection(ni,AntiCheat.Misc.Spammer.Zephyr.name,AntiCheat.Misc.Spammer.Zephyr.description)};
if(text.startsWith("Horion - the best minecraft bedrock utility mod - horion.download")){return NCBPdetection(ni,AntiCheat.Misc.Spammer.Horion.name,AntiCheat.Misc.Spammer.Horion.description)}});
events.packetBefore(MinecraftPacketIds.Text).on((pkt, ni)=> {
    const msg = pkt.message;
    if (msg.length > 512) {
        NCBPdetection(ni, "Spammer", "The chat length is over 512");
    };
});