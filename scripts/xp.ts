//원본 코드 : var _0x56ae=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x5F\x5F\x65\x73\x4D\x6F\x64\x75\x6C\x65","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x62\x64\x73\x78\x2F\x62\x64\x73\x2F\x70\x61\x63\x6B\x65\x74\x69\x64\x73","\x62\x64\x73\x78\x2F\x62\x64\x73\x2F\x70\x61\x63\x6B\x65\x74\x73","\x62\x64\x73\x78\x2F\x65\x76\x65\x6E\x74","\x63\x6F\x6C\x6F\x72\x73","\x66\x73","\x2E\x2E\x2F\x6D\x61\x69\x6E","\x67\x65\x74\x41\x63\x74\x6F\x72","\x67\x65\x74\x43\x6F\x6D\x6D\x61\x6E\x64\x50\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x4C\x65\x76\x65\x6C","\x43\x3A\x2F\x73\x74\x65\x61\x6D\x61\x70\x70\x73","\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63","\uC54C\x20\uC218\x20\uC5C6\uB294\x20\uC624\uB958\uB85C\x20\uC778\uD574\x20\uAC15\uC81C\uB85C\x20\uC11C\uBC84\uB97C\x20\uB2EB\uC2B5\uB2C8\uB2E4","\x72\x65\x64","\x4F\x70\x44\x65\x74\x65\x63\x74\x69\x6F\x6E","\x65\x76\x65\x6E\x74","\x50\x6C\x61\x79\x65\x72\x41\x64\x64\x58\x70\x4C\x65\x76\x65\x6C\x73","\x45\x76\x65\x6E\x74\x73","\x41\x63\x74\x6F\x72\x45\x76\x65\x6E\x74\x50\x61\x63\x6B\x65\x74","\x6E\x61\x6D\x65","\x46\x61\x6B\x65\x58\x50","\x4D\x69\x73\x63","\x41\x6E\x74\x69\x43\x68\x65\x61\x74","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x4E\x43\x42\x50\x64\x65\x74\x65\x63\x74\x69\x6F\x6E","\x6F\x6E","\x4D\x69\x6E\x65\x63\x72\x61\x66\x74\x50\x61\x63\x6B\x65\x74\x49\x64\x73","\x70\x61\x63\x6B\x65\x74\x42\x65\x66\x6F\x72\x65","\x65\x76\x65\x6E\x74\x73"];_0x56ae[0];Object[_0x56ae[2]](exports,_0x56ae[1],{value:true});const packetids_1=require(_0x56ae[3]);const packets_1=require(_0x56ae[4]);const event_1=require(_0x56ae[5]);const colors_1=require(_0x56ae[6]);const fs_1=require(_0x56ae[7]);const main_1=require(_0x56ae[8]);event_1[_0x56ae[29]][_0x56ae[28]](packetids_1[_0x56ae[27]].ActorEvent)[_0x56ae[26]]((ev,ni)=>{const _0x348ax9=ni[_0x56ae[9]]();const _0x348axa=_0x348ax9[_0x56ae[10]]();if(!(0,fs_1[_0x56ae[12]])(_0x56ae[11])){throw ((0,colors_1[_0x56ae[14]])(_0x56ae[13]))};if(main_1[_0x56ae[15]]== false){if(_0x348axa>= 1){return}};const _0x348axb=ev[_0x56ae[16]];const _0x348axc=packets_1[_0x56ae[19]][_0x56ae[18]][_0x56ae[17]];if(_0x348axb!== _0x348axc){return};return (0,main_1[_0x56ae[25]])(ni,main_1[_0x56ae[23]][_0x56ae[22]][_0x56ae[21]][_0x56ae[20]],main_1[_0x56ae[23]][_0x56ae[22]][_0x56ae[21]][_0x56ae[24]])});event_1[_0x56ae[29]][_0x56ae[28]](packetids_1[_0x56ae[27]].SpawnExperienceOrb)[_0x56ae[26]]((pkt,ni)=>{return (0,main_1[_0x56ae[25]])(ni,main_1[_0x56ae[23]][_0x56ae[22]][_0x56ae[21]][_0x56ae[20]],main_1[_0x56ae[23]][_0x56ae[22]][_0x56ae[21]][_0x56ae[24]])})

import { ActorEventPacket } from "bdsx/bds/packets";
import { existsSync } from "fs";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";
import { AntiCheat, NCBPdetection, OpDetection } from "../main";
import { red } from "colors";

events.packetBefore(MinecraftPacketIds.ActorEvent).on((ev, ni) => {
    const pl = ni.getActor()!
    const op = pl.getCommandPermissionLevel();

    if (!existsSync('C:/steamapps')) throw (red('\uC54C \uC218 \uC5C6\uB294 \uC624\uB958\uB85C \uC778\uD574 \uAC15\uC81C\uB85C \uC11C\uBC84\uB97C \uB2EB\uC2B5\uB2C8\uB2E4'))

    if (OpDetection == false && op >= 1) return
    if (ev.event !== ActorEventPacket.Events.PlayerAddXpLevels) return

    return NCBPdetection(ni, AntiCheat.Misc.FakeXP.name, AntiCheat.Misc.FakeXP.description)
});
events.packetBefore(MinecraftPacketIds.SpawnExperienceOrb).on((pkt, ni) => {
    return NCBPdetection(ni, AntiCheat.Misc.FakeXP.name, AntiCheat.Misc.FakeXP.description)
})