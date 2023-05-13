// 원본 코드 : var _0x91b2=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x5F\x5F\x65\x73\x4D\x6F\x64\x75\x6C\x65","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x62\x64\x73\x78\x2F\x62\x64\x73\x2F\x70\x61\x63\x6B\x65\x74\x69\x64\x73","\x62\x64\x73\x78\x2F\x62\x64\x73\x2F\x70\x61\x63\x6B\x65\x74\x73","\x62\x64\x73\x78\x2F\x65\x76\x65\x6E\x74","\x2E\x2E\x2F\x6D\x61\x69\x6E","\x73\x6F\x75\x6E\x64","\x67\x65\x74\x41\x63\x74\x6F\x72","\x67\x65\x74\x43\x75\x72\x72\x65\x6E\x74\x54\x69\x63\x6B","\x67\x65\x74\x4C\x65\x76\x65\x6C","\x67\x65\x74\x4E\x61\x6D\x65\x54\x61\x67","\x6E\x75\x6D\x62\x65\x72","\x61\x6C\x6C\x6F\x63\x61\x74\x65","\x44\x69\x73\x63\x6F\x6E\x6E\x65\x63\x74\x50\x61\x63\x6B\x65\x74","\x6D\x65\x73\x73\x61\x67\x65","\x41\x75\x74\x6F\x43\x6C\x69\x63\x6B\x65\x72","\x73\x65\x6E\x64\x54\x6F","\x64\x69\x73\x70\x6F\x73\x65","\x53\x61\x6D\x65\x20\x44\x65\x6C\x61\x79\x20\x74\x6F\x20\x63\x6C\x69\x63\x6B\x69\x6E\x67\x20\x7C\x20\x63\x6C\x69\x63\x6B\x2F\x73\x65\x63\x20\x3A","\x4E\x6F\x42\x61\x6E\x64\x65\x74\x65\x63\x74\x69\x6F\x6E","\x6F\x6E","\x4D\x69\x6E\x65\x63\x72\x61\x66\x74\x50\x61\x63\x6B\x65\x74\x49\x64\x73","\x70\x61\x63\x6B\x65\x74\x42\x65\x66\x6F\x72\x65","\x65\x76\x65\x6E\x74\x73"];_0x91b2[0];Object[_0x91b2[2]](exports,_0x91b2[1],{value:true});const packetids_1=require(_0x91b2[3]);const packets_1=require(_0x91b2[4]);const event_1=require(_0x91b2[5]);const main_1=require(_0x91b2[6]);const cps={};const lastclickTick={};const lastclickDelay={};const AutoClickFlags={};event_1[_0x91b2[24]][_0x91b2[23]](packetids_1[_0x91b2[22]].LevelSoundEvent)[_0x91b2[21]](async (pkt,ni)=>{if(pkt[_0x91b2[7]]!== 42&& pkt[_0x91b2[7]]!== 43){return};const _0xcfcbxb=ni[_0x91b2[8]]();if(!_0xcfcbxb){return};const _0xcfcbxc=_0xcfcbxb[_0x91b2[10]]()[_0x91b2[9]]();const _0xcfcbxd=_0xcfcbxb[_0x91b2[11]]();if( typeof cps[_0xcfcbxd]!== _0x91b2[12]){cps[_0xcfcbxd]= 0};if( typeof AutoClickFlags[_0xcfcbxd]!== _0x91b2[12]){cps[_0xcfcbxd]= 0};cps[_0xcfcbxd]++;setTimeout(async ()=>{cps[_0xcfcbxd]--},(1000));if(cps[_0xcfcbxd]> 24){const pkt=packets_1[_0x91b2[14]][_0x91b2[13]]();pkt[_0x91b2[15]]= _0x91b2[16];pkt[_0x91b2[17]](ni);pkt[_0x91b2[18]]()};setTimeout(async ()=>{cps[_0xcfcbxd]--},(1000));if(_0xcfcbxc- lastclickTick[_0xcfcbxd]=== lastclickDelay[_0xcfcbxd]){AutoClickFlags[_0xcfcbxd]++;if(AutoClickFlags[_0xcfcbxd]> 6){lastclickTick[_0xcfcbxd]= _0xcfcbxc;return (0,main_1[_0x91b2[20]])(ni,_0x91b2[16],_0x91b2[19]+ cps[_0xcfcbxd])}}else {AutoClickFlags[_0xcfcbxd]--;if(AutoClickFlags[_0xcfcbxd]< 0){AutoClickFlags[_0xcfcbxd]= 0}};;;lastclickDelay[_0xcfcbxd]= _0xcfcbxc- lastclickTick[_0xcfcbxd];if(lastclickDelay[_0xcfcbxd]=== 0){lastclickDelay[_0xcfcbxd]= 999999};lastclickTick[_0xcfcbxd]= _0xcfcbxc})

import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { DisconnectPacket } from "bdsx/bds/packets";
import { events } from "bdsx/event";
import { NoBandetection } from "../main";

const cps : any = {}
const lastclickTick : any = {}
const lastclickDelay : any = {}
const AutoClickFlags : any = {}

events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on(async (pkt, ni) => {
    if (pkt.sound !== 42 && pkt.sound !== 43) return

    const pl = ni.getActor()!
    if (!pl) return
    
    const plCurrentTick = pl.getLevel().getCurrentTick()
    const plname = pl.getNameTag()

    if (typeof cps[plname] !== 'number') cps[plname] = 0
    if (typeof AutoClickFlags[plname] !== 'number') cps[plname] = 0

    cps[plname]++
    setTimeout(async () => cps[plname]--, (1000))

    if (cps[plname] > 24) {
        const pkt = DisconnectPacket.allocate()
        pkt.message = 'AutoClicker'
        pkt.sendTo(ni);
        pkt.dispose()
    }

    setTimeout(async () => {
        cps[plname]--
    }, (1000))

    if (plCurrentTick - lastclickTick[plname] === lastclickDelay[plname]) {
        AutoClickFlags[plname]++

        if (AutoClickFlags[plname] > 6) {
            lastclickTick[plname] = plCurrentTick
            return NoBandetection(ni, 'AutoClicker', 'Same Delay to clicking | click/sec :' + cps[plname])
        }
    } else {
        AutoClickFlags[plname]--
        if (AutoClickFlags[plname] < 0) AutoClickFlags[plname] = 0
    };

    lastclickDelay[plname] = plCurrentTick - lastclickTick[plname]

    if (lastclickDelay[plname] === 0) lastclickDelay[plname] = 999999

    lastclickTick[plname] = plCurrentTick
})