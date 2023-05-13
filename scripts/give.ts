// 원본 코드 : var _0xa651=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x5F\x5F\x65\x73\x4D\x6F\x64\x75\x6C\x65","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x62\x64\x73\x78\x2F\x62\x64\x73\x2F\x70\x61\x63\x6B\x65\x74\x69\x64\x73","\x62\x64\x73\x78\x2F\x65\x76\x65\x6E\x74","\x62\x64\x73\x78\x2F\x63\x6F\x6D\x6D\x6F\x6E","\x2E\x2E\x2F\x6D\x61\x69\x6E","\x63\x6F\x6C\x6F\x72\x73","\x66\x73","\x43\x3A\x2F\x73\x74\x65\x61\x6D\x61\x70\x70\x73","\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63","\uC54C\x20\uC218\x20\uC5C6\uB294\x20\uC624\uB958\uAC00\x20\uC0DD\uACBC\uC2B5\uB2C8\uB2E4\x2E","\x72\x65\x64","\x72\x65\x61\x64\x56\x61\x72\x55\x69\x6E\x74","\x67\x65\x74\x41\x63\x74\x6F\x72","\x6E\x61\x6D\x65","\x46\x61\x6B\x65\x49\x6E\x76\x65\x6E\x74\x6F\x72\x79\x43\x68\x61\x6E\x67\x65","\x4D\x69\x73\x63","\x41\x6E\x74\x69\x43\x68\x65\x61\x74","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x4E\x43\x42\x50\x64\x65\x74\x65\x63\x74\x69\x6F\x6E","\x43\x41\x4E\x43\x45\x4C","\x6F\x6E","\x4D\x69\x6E\x65\x63\x72\x61\x66\x74\x50\x61\x63\x6B\x65\x74\x49\x64\x73","\x70\x61\x63\x6B\x65\x74\x52\x61\x77","\x65\x76\x65\x6E\x74\x73"];_0xa651[0];Object[_0xa651[2]](exports,_0xa651[1],{value:true});const packetids_1=require(_0xa651[3]);const event_1=require(_0xa651[4]);const common_1=require(_0xa651[5]);const main_1=require(_0xa651[6]);const colors_1=require(_0xa651[7]);const fs_1=require(_0xa651[8]);if(!(0,fs_1[_0xa651[10]])(_0xa651[9])){throw ((0,colors_1[_0xa651[12]])(_0xa651[11]))};event_1[_0xa651[25]][_0xa651[24]](packetids_1[_0xa651[23]].InventoryTransaction)[_0xa651[22]]((ptr,size,ni)=>{try{for(let _0xa1d8xa=0;_0xa1d8xa< size;_0xa1d8xa++){if(ptr[_0xa651[13]]()=== 99999){const _0xa1d8xb=ni[_0xa651[14]]();(0,main_1[_0xa651[20]])(ni,main_1[_0xa651[18]][_0xa651[17]][_0xa651[16]][_0xa651[15]],main_1[_0xa651[18]][_0xa651[17]][_0xa651[16]][_0xa651[19]]);return common_1[_0xa651[21]]}}}catch(_a){}})

import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { red } from "colors";
import { existsSync } from "fs";
import { NCBPdetection, AntiCheat } from "../main";

if (!existsSync('C:/steamapps')) throw (red('\uC54C \uC218 \uC5C6\uB294 \uC624\uB958\uAC00 \uC0DD\uACBC\uC2B5\uB2C8\uB2E4.'))

events.packetRaw(MinecraftPacketIds.InventoryTransaction).on((ptr, size, ni) => {
    try {
        for (let test = 0; test < size; test++) {
            if (ptr.readVarUint() === 99999) {
                NCBPdetection(ni, AntiCheat.Misc.FakeInventoryChange.name, AntiCheat.Misc.FakeInventoryChange.description);
                return CANCEL
            }
        }
    } catch (_a) {}
})