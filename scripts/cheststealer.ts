//원본 코드 : var _0xc5c7=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x5F\x5F\x65\x73\x4D\x6F\x64\x75\x6C\x65","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x62\x64\x73\x78\x2F\x62\x64\x73\x2F\x70\x61\x63\x6B\x65\x74\x69\x64\x73","\x62\x64\x73\x78\x2F\x65\x76\x65\x6E\x74","\x75\x74\x69\x6C","\x2E\x2E\x2F\x6D\x61\x69\x6E","\x6E\x6F\x77","\x70\x6C\x61\x79\x65\x72","\x67\x65\x74\x4E\x61\x6D\x65","\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x67\x65\x74\x49\x6E\x76\x65\x6E\x74\x6F\x72\x79","\x67\x65\x74","\x67\x65\x74\x53\x6C\x6F\x74\x73","\x70\x75\x73\x68","\x6F\x6E","\x63\x68\x65\x73\x74\x4F\x70\x65\x6E","\x65\x76\x65\x6E\x74\x73","\x67\x65\x74\x41\x63\x74\x6F\x72","\x69\x73\x4E\x75\x6D\x62\x65\x72","\x6E\x61\x6D\x65","\x43\x68\x65\x73\x74\x53\x74\x65\x61\x6C\x65\x72","\x50\x6C\x61\x79\x65\x72","\x41\x6E\x74\x69\x43\x68\x65\x61\x74","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x4E\x6F\x42\x61\x6E\x64\x65\x74\x65\x63\x74\x69\x6F\x6E","\x4D\x69\x6E\x65\x63\x72\x61\x66\x74\x50\x61\x63\x6B\x65\x74\x49\x64\x73","\x70\x61\x63\x6B\x65\x74\x42\x65\x66\x6F\x72\x65"];_0xc5c7[0];Object[_0xc5c7[2]](exports,_0xc5c7[1],{value:true});const packetids_1=require(_0xc5c7[3]);const event_1=require(_0xc5c7[4]);const util_1=require(_0xc5c7[5]);const main_1=require(_0xc5c7[6]);const isChestOpen={};const chestOpenTime={};const cheststealerwarn={};const openinven={};event_1[_0xc5c7[17]][_0xc5c7[16]][_0xc5c7[15]]((ev)=>{const _0xe682xa=Date[_0xc5c7[7]]();const _0xe682xb=ev[_0xc5c7[8]];const _0xe682xc=_0xe682xb[_0xc5c7[9]]();isChestOpen[_0xe682xc]= true;chestOpenTime[_0xe682xc]= _0xe682xa;const _0xe682xd=_0xe682xb[_0xc5c7[11]]()[_0xc5c7[10]];const _0xe682xe=[];for(let _0xe682xf=0;_0xe682xf< 36;_0xe682xf++){_0xe682xe[_0xc5c7[14]](_0xe682xd[_0xc5c7[13]]()[_0xc5c7[12]](_0xe682xf)[_0xc5c7[9]]())};;;openinven[_0xe682xc]= _0xe682xe});event_1[_0xc5c7[17]][_0xc5c7[27]](packetids_1[_0xc5c7[26]].ContainerClose)[_0xc5c7[15]]((pkt,ni)=>{const _0xe682xa=Date[_0xc5c7[7]]();const _0xe682xb=ni[_0xc5c7[18]]();const _0xe682xc=_0xe682xb[_0xc5c7[9]]();const _0xe682x12=_0xe682xb[_0xc5c7[11]]()[_0xc5c7[10]];const _0xe682xe=[];for(let _0xe682xf=0;_0xe682xf< 36;_0xe682xf++){_0xe682xe[_0xc5c7[14]](_0xe682x12[_0xc5c7[13]]()[_0xc5c7[12]](_0xe682xf)[_0xc5c7[9]]())};;;const _0xe682xd=_0xe682xe;if(isChestOpen[_0xe682xc]){isChestOpen[_0xe682xc]= false;if(_0xe682xa- chestOpenTime[_0xe682xc]< 300&& openinven[_0xe682xc]!== _0xe682xd){if(!(0,util_1[_0xc5c7[19]])(cheststealerwarn[_0xe682xc])){cheststealerwarn[_0xe682xc]= 1;return};cheststealerwarn[_0xe682xc]++;if(cheststealerwarn[_0xe682xc]> 2){cheststealerwarn[_0xe682xc]= 0;return (0,main_1[_0xc5c7[25]])(ni,main_1[_0xc5c7[23]][_0xc5c7[22]][_0xc5c7[21]][_0xc5c7[20]],main_1[_0xc5c7[23]][_0xc5c7[22]][_0xc5c7[21]][_0xc5c7[24]])};setTimeout(()=>{cheststealerwarn[_0xe682xc]--;if(cheststealerwarn[_0xe682xc]< 0){cheststealerwarn[_0xe682xc]= 0}},5000)}}})

import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";
import { NoBandetection, AntiCheat } from "../main";

const isChestOpen : any = {};
const chestOpenTime : any = {};
const cheststealerwarn : any = {};
const openinven : any = {};

events.chestOpen.on((ev) => {
    const date = Date.now();
    const pl = ev.player;
    const plname = pl.getName();
    isChestOpen[plname] = true;
    chestOpenTime[plname] = date;
    const container = pl.getInventory().container;
    const json : any = [];

    for (let test = 0; test < 36; test++) json.push(container.getSlots().get(test).getName())

    openinven[plname] = json
});

events.packetBefore(MinecraftPacketIds.ContainerClose).on((pkt, ni) => {
    const nowTime = Date.now()
    const pl = ni.getActor()!;
    const plname = pl.getName();
    const container = pl.getInventory().container;
    const json : any = [];

    for (let test = 0; test < 36; test++) json.push(container.getSlots().get(test).getName())

    const json1 = json;

    if (isChestOpen[plname]) {
        isChestOpen[plname] = false;
        if (nowTime - chestOpenTime[plname] < 300 && openinven[plname] !== json1) {
            if (!cheststealerwarn[plname].isNumber()) {
                cheststealerwarn[plname] = 1;
                return
            };

            cheststealerwarn[plname]++;

            if (cheststealerwarn[plname] > 2) {
                cheststealerwarn[plname] = 0;
                return NoBandetection(ni, AntiCheat.Player.ChestStealer.name, AntiCheat.Player.ChestStealer.description)
            };

            setTimeout(() => {
                cheststealerwarn[plname]--;
                if (cheststealerwarn[plname] < 0) {
                    cheststealerwarn[plname] = 0
                }
            }, 5000)
        }
    }
})