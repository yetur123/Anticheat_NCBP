// 원본 코드 : var _0x1154=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x5F\x5F\x65\x73\x4D\x6F\x64\x75\x6C\x65","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x62\x64\x73\x78\x2F\x62\x64\x73\x2F\x70\x61\x63\x6B\x65\x74\x69\x64\x73","\x62\x64\x73\x78\x2F\x65\x76\x65\x6E\x74","\x2E\x2E\x2F\x6D\x61\x69\x6E","\x63\x6F\x6E\x6E\x72\x65\x71","\x67\x65\x74\x49\x64","\x67\x65\x74\x43\x65\x72\x74\x69\x66\x69\x63\x61\x74\x65","\x6F\x6E","\x70\x61\x63\x6B\x65\x74\x41\x66\x74\x65\x72","\x65\x76\x65\x6E\x74\x73","\x67\x65\x74\x41\x63\x74\x6F\x72","\x67\x65\x74\x47\x61\x6D\x65\x54\x79\x70\x65","\x6E\x6F\x77","\x67\x65\x74\x4E\x61\x6D\x65\x54\x61\x67","\x6E\x75\x6D\x62\x65\x72","\x63\x65\x69\x6C","\x54\x69\x6D\x65\x72","\x43\x6C\x69\x65\x6E\x74\x2D\x53\x69\x64\x65\x20\x46\x61\x73\x74\x20\x54\x69\x63\x6B\x69\x6E\x67","\x4E\x43\x42\x50\x64\x65\x74\x65\x63\x74\x69\x6F\x6E","\x4D\x69\x6E\x65\x63\x72\x61\x66\x74\x50\x61\x63\x6B\x65\x74\x49\x64\x73","\x70\x61\x63\x6B\x65\x74\x42\x65\x66\x6F\x72\x65"];_0x1154[0];Object[_0x1154[2]](exports,_0x1154[1],{value:true});const packetids_1=require(_0x1154[3]);const event_1=require(_0x1154[4]);const main_1=require(_0x1154[5]);const pktstack1sec={};const lastsendtick={};const connected={};const timerFlag={};const pkt1sec={};const LastPPS={};event_1[_0x1154[11]][_0x1154[10]](1)[_0x1154[9]]((pkt,ni)=>{const _0x8a91xc=pkt[_0x1154[6]];if(!_0x8a91xc){return};const _0x8a91xd=_0x8a91xc[_0x1154[8]]()[_0x1154[7]]();connected[_0x8a91xd]= true;setTimeout(()=>{connected[_0x8a91xd]= false},15000)});event_1[_0x1154[11]][_0x1154[22]](packetids_1[_0x1154[21]].MovePlayer)[_0x1154[9]](async (pkt,ni)=>{const _0x8a91xe=ni[_0x1154[12]]();if(!_0x8a91xe){return};const _0x8a91xf=_0x8a91xe[_0x1154[13]]();const _0x8a91x10=Date[_0x1154[14]]();const _0x8a91x11=_0x8a91xe[_0x1154[15]]();if( typeof timerFlag[_0x8a91x11]!== _0x1154[16]){timerFlag[_0x8a91x11]= 0};if( typeof pkt1sec[_0x8a91x11]!== _0x1154[16]){pkt1sec[_0x8a91x11]= 0};pkt1sec[_0x8a91x11]++;setTimeout(async ()=>{pkt1sec[_0x8a91x11]--;if(pkt1sec[_0x8a91x11]< 0){pkt1sec[_0x8a91x11]= 0}},999);if(_0x8a91xf!== 2&& _0x8a91xf!== 0&& _0x8a91xf!== 5){return};const allowedpktstack=20+ Math[_0x1154[17]]((_0x8a91x10- lastsendtick[_0x8a91x11])/ 50);if(pkt1sec[_0x8a91x11]> 22&& pkt1sec[_0x8a91x11]> allowedpktstack&& connected[_0x8a91x11]!== true&& LastPPS[_0x8a91x11]=== pkt1sec[_0x8a91x11]){timerFlag[_0x8a91x11]++;if(timerFlag[_0x8a91x11]> 14){return (0,main_1[_0x1154[20]])(ni,_0x1154[18],_0x1154[19])};setTimeout(async ()=>{timerFlag[_0x8a91x11]--},(10000))};lastsendtick[_0x8a91x11]= _0x8a91x10;LastPPS[_0x8a91x11]= pkt1sec[_0x8a91x11]})

import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";
import { NCBPdetection } from "../main";

const lastsendtick : any = {};
const connected : any = {};
const timerFlag : any = {};
const pkt1sec : any = {};
const LastPPS : any = {};

events.packetAfter(1).on((pkt, ni) => {
    const connreq = pkt.connreq;
    if (!connreq) return
    
    const plname = connreq.getCertificate().getId();
    connected[plname] = true;

    setTimeout(() => connected[plname] = false, 15000)
});

events.packetBefore(MinecraftPacketIds.MovePlayer).on(async (pkt, ni) => {
    const pl = ni.getActor();
    if (!pl) return

    const gamemode = pl.getGameType();
    const time = Date.now();
    const plname = pl.getNameTag();

    if (typeof timerFlag[plname] !== 'number') timerFlag[plname] = 0
    if (typeof pkt1sec[plname] !== 'number') pkt1sec[plname] = 0

    pkt1sec[plname]++;

    setTimeout(async () => {
        pkt1sec[plname]--;
        if (pkt1sec[plname] < 0) pkt1sec[plname] = 0
    }, 999);

    if (gamemode !== 2 && gamemode !== 0 && gamemode !== 5) return

    const allowedpktstack = 20 + Math.ceil((time - lastsendtick[plname]) / 50);

    if (pkt1sec[plname] > 22 && pkt1sec[plname] > allowedpktstack && connected[plname] !== true && LastPPS[plname] === pkt1sec[plname]) {
        timerFlag[plname]++
        if (timerFlag[plname] > 14) return NCBPdetection(ni, 'Timer', 'Client-Side Fast Ticking')

        setTimeout(async () => {
            timerFlag[plname]--
        }, (10000))
    };

    lastsendtick[plname] = time;
    LastPPS[plname] = pkt1sec[plname]
})