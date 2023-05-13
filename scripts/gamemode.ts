// 원본 코드 : var _0xaf22=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x5F\x5F\x65\x73\x4D\x6F\x64\x75\x6C\x65","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x62\x64\x73\x78\x2F\x65\x76\x65\x6E\x74","\x62\x64\x73\x78\x2F\x6C\x61\x75\x6E\x63\x68\x65\x72","\x67\x65\x74\x50\x6C\x61\x79\x65\x72\x73","\x73\x65\x72\x76\x65\x72\x49\x6E\x73\x74\x61\x6E\x63\x65","\x62\x65\x64\x72\x6F\x63\x6B\x53\x65\x72\x76\x65\x72","\x67\x65\x74\x47\x61\x6D\x65\x54\x79\x70\x65","\x73\x65\x74\x47\x61\x6D\x65\x54\x79\x70\x65","\x6F\x6E","\x73\x65\x72\x76\x65\x72\x4F\x70\x65\x6E","\x65\x76\x65\x6E\x74\x73","\x73\x65\x72\x76\x65\x72\x4C\x65\x61\x76\x65"];_0xaf22[0];Object[_0xaf22[2]](exports,_0xaf22[1],{value:true});const event_1=require(_0xaf22[3]);const launcher_1=require(_0xaf22[4]);let a;event_1[_0xaf22[12]][_0xaf22[11]][_0xaf22[10]](()=>{a= setInterval(async ()=>{const _0x8e60x4=launcher_1[_0xaf22[7]][_0xaf22[6]][_0xaf22[5]]();for(const _0x8e60x5 of _0x8e60x4){const _0x8e60x6=_0x8e60x5[_0xaf22[8]]();if(_0x8e60x6=== 2){_0x8e60x5[_0xaf22[9]](0);_0x8e60x5[_0xaf22[9]](_0x8e60x6);return}};;},200)});event_1[_0xaf22[12]][_0xaf22[13]][_0xaf22[10]](()=>{clearInterval(a)})

import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";

let a : any

events.serverOpen.on(() => {
    a = setInterval(async () => {
        const pls = bedrockServer.serverInstance.getPlayers();

        for (const pl of pls) {
            const gamemode = pl.getGameType();

            if (gamemode === 2) {
                pl.setGameType(0);
                pl.setGameType(gamemode);
                return
            }
        };
    }, 200)
});

events.serverLeave.on(() => {
    clearInterval(a)
})