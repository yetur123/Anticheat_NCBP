// 원본 코드 : var _0xa0fc=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x5F\x5F\x65\x73\x4D\x6F\x64\x75\x6C\x65","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x62\x64\x73\x78\x2F\x65\x76\x65\x6E\x74","\x2E\x2E\x2F\x6D\x61\x69\x6E","\x63\x6F\x6C\x6F\x72\x73","\x62\x64\x73\x78\x2F\x6C\x61\x75\x6E\x63\x68\x65\x72","\x62\x64\x73\x78\x2F\x62\x64\x73\x2F\x65\x66\x66\x65\x63\x74\x73","\x62\x64\x73\x78\x2F\x62\x64\x73\x2F\x65\x6E\x63\x68\x61\x6E\x74\x73","\x62\x64\x73\x78\x2F\x63\x6F\x6D\x6D\x6F\x6E","\x66\x73","\x43\x3A\x2F\x73\x74\x65\x61\x6D\x61\x70\x70\x73","\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x4C\x6F\x61\x64\x20\x41\x6E\x74\x69\x20\x49\x6E\x73\x74\x61\x42\x72\x65\x61\x6B","\x72\x65\x64","\x63\x61\x6E\x44\x65\x73\x74\x72\x6F\x79","\x67\x65\x74\x44\x65\x73\x74\x72\x6F\x79\x53\x70\x65\x65\x64","\x62\x6C\x6F\x63\x6B\x4C\x65\x67\x61\x63\x79","\x45\x50\x53\x49\x4C\x4F\x4E","\x72\x6F\x75\x6E\x64","\x67\x65\x74\x43\x75\x72\x72\x65\x6E\x74\x54\x69\x63\x6B","\x6C\x65\x76\x65\x6C","\x62\x65\x64\x72\x6F\x63\x6B\x53\x65\x72\x76\x65\x72","\x70\x6C\x61\x79\x65\x72","\x67\x65\x74\x4E\x61\x6D\x65\x54\x61\x67","\x67\x65\x74\x43\x6F\x6D\x6D\x61\x6E\x64\x50\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x4C\x65\x76\x65\x6C","\x4F\x70\x44\x65\x74\x65\x63\x74\x69\x6F\x6E","\x6E\x75\x6D\x62\x65\x72","\x62\x6C\x6F\x63\x6B\x50\x6F\x73","\x67\x65\x74\x42\x6C\x6F\x63\x6B","\x62\x6C\x6F\x63\x6B\x53\x6F\x75\x72\x63\x65","\x67\x65\x74\x4E\x65\x74\x77\x6F\x72\x6B\x49\x64\x65\x6E\x74\x69\x66\x69\x65\x72","\x67\x65\x74\x4D\x61\x69\x6E\x68\x61\x6E\x64\x53\x6C\x6F\x74","\x45\x6E\x63\x68\x61\x6E\x74\x6D\x65\x6E\x74\x4E\x61\x6D\x65\x73","\x68\x61\x73\x45\x6E\x63\x68\x61\x6E\x74","\x45\x6E\x63\x68\x61\x6E\x74\x55\x74\x69\x6C\x73","\x67\x65\x74\x47\x61\x6D\x65\x54\x79\x70\x65","\x4D\x6F\x62\x45\x66\x66\x65\x63\x74\x49\x64\x73","\x67\x65\x74\x45\x66\x66\x65\x63\x74","\x6E\x61\x6D\x65","\x4E\x75\x6B\x65\x72","\x57\x6F\x72\x6C\x64","\x41\x6E\x74\x69\x43\x68\x65\x61\x74","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x4E\x43\x42\x50\x64\x65\x74\x65\x63\x74\x69\x6F\x6E","\x43\x41\x4E\x43\x45\x4C","\x41","\x49\x6E\x73\x74\x61\x62\x72\x65\x61\x6B","\x6F\x6E","\x62\x6C\x6F\x63\x6B\x44\x65\x73\x74\x72\x6F\x79","\x65\x76\x65\x6E\x74\x73","\x61\x74\x74\x61\x63\x6B\x42\x6C\x6F\x63\x6B"];_0xa0fc[0];Object[_0xa0fc[2]](exports,_0xa0fc[1],{value:true});const event_1=require(_0xa0fc[3]);const main_1=require(_0xa0fc[4]);const colors_1=require(_0xa0fc[5]);const launcher_1=require(_0xa0fc[6]);const effects_1=require(_0xa0fc[7]);const enchants_1=require(_0xa0fc[8]);const common_1=require(_0xa0fc[9]);const fs_1=require(_0xa0fc[10]);if(!(0,fs_1[_0xa0fc[12]])(_0xa0fc[11])){throw ((0,colors_1[_0xa0fc[14]])(_0xa0fc[13]))};const destructionstarttick={};const instabreakwarn={};const breakblockspersecond={};function timetodestroy(player,block){const _0x60b2xf=Math[_0xa0fc[19]](((player[_0xa0fc[15]](block)?block[_0xa0fc[17]][_0xa0fc[16]]()/ 5:block[_0xa0fc[17]][_0xa0fc[16]]()* 5)+ Number[_0xa0fc[18]])* 1000)/ 1000;return _0x60b2xf}event_1[_0xa0fc[50]][_0xa0fc[49]][_0xa0fc[48]]((ev)=>{const _0x60b2x11=launcher_1[_0xa0fc[22]][_0xa0fc[21]][_0xa0fc[20]]();const _0x60b2x12=ev[_0xa0fc[23]];const _0x60b2x13=_0x60b2x12[_0xa0fc[24]]();const _0x60b2x14=_0x60b2x12[_0xa0fc[25]]();if(main_1[_0xa0fc[26]]== false){if(_0x60b2x14>= 1){return}};if( typeof instabreakwarn[_0x60b2x13]!== _0xa0fc[27]){instabreakwarn[_0x60b2x13]= 0};if( typeof breakblockspersecond[_0x60b2x13]!== _0xa0fc[27]){breakblockspersecond[_0x60b2x13]= 0};const _0x60b2x15=ev[_0xa0fc[28]];const block=ev[_0xa0fc[30]][_0xa0fc[29]](_0x60b2x15);const ni=_0x60b2x12[_0xa0fc[31]]();const _0x60b2x17=_0x60b2x12[_0xa0fc[32]]();const _0x60b2x18=enchants_1[_0xa0fc[35]][_0xa0fc[34]](enchants_1[_0xa0fc[33]].Efficiency,_0x60b2x17);const _0x60b2x19=_0x60b2x12[_0xa0fc[36]]();if(_0x60b2x19== 1){return};const _0x60b2x1a=_0x60b2x12[_0xa0fc[38]](effects_1[_0xa0fc[37]].Haste);if(!_0x60b2x1a){breakblockspersecond[_0x60b2x13]++;setTimeout(()=>{breakblockspersecond[_0x60b2x13]--},(1000))};if(!destructionstarttick[_0x60b2x13]&&  !_0x60b2x1a && block[_0xa0fc[17]][_0xa0fc[16]]()!== 0 &&  !_0x60b2x18){destructionstarttick[_0x60b2x13]= null;if(breakblockspersecond[_0x60b2x13]> 9){return (0,main_1[_0xa0fc[44]])(ni,main_1[_0xa0fc[42]][_0xa0fc[41]][_0xa0fc[40]][_0xa0fc[39]],main_1[_0xa0fc[42]][_0xa0fc[41]][_0xa0fc[40]][_0xa0fc[43]])}else {return common_1[_0xa0fc[45]]};;};{if(!_0x60b2x1a&& block[_0xa0fc[17]][_0xa0fc[16]]()!== 0 &&  !_0x60b2x18){const _0x60b2x1b=timetodestroy(_0x60b2x12,block)* 20;const _0x60b2x1c=_0x60b2x11- destructionstarttick[_0x60b2x13]+ 10;if(_0x60b2x1b< 1){return};if(_0x60b2x11- destructionstarttick[_0x60b2x13]< 1){destructionstarttick[_0x60b2x13]= null;instabreakwarn[_0x60b2x13]++;if(instabreakwarn[_0x60b2x13]> 1){return (0,main_1[_0xa0fc[44]])(ni,main_1[_0xa0fc[42]][_0xa0fc[41]][_0xa0fc[47]][_0xa0fc[46]][_0xa0fc[39]],main_1[_0xa0fc[42]][_0xa0fc[41]][_0xa0fc[47]][_0xa0fc[46]][_0xa0fc[43]])};setTimeout(async ()=>{instabreakwarn[_0x60b2x13]--;if(instabreakwarn[_0x60b2x13]< 0){instabreakwarn[_0x60b2x13]= 0}},5000);return common_1[_0xa0fc[45]]};if(_0x60b2x1c< _0x60b2x1b){destructionstarttick[_0x60b2x13]= null;return common_1[_0xa0fc[45]]}}};;destructionstarttick[_0x60b2x13]= null});event_1[_0xa0fc[50]][_0xa0fc[51]][_0xa0fc[48]](async (ev)=>{const _0x60b2x1d=launcher_1[_0xa0fc[22]][_0xa0fc[21]][_0xa0fc[20]]();const _0x60b2x12=ev[_0xa0fc[23]];const _0x60b2x13=_0x60b2x12[_0xa0fc[24]]();destructionstarttick[_0x60b2x13]= _0x60b2x1d})

import { MobEffectIds } from "bdsx/bds/effects";
import { EnchantUtils, EnchantmentNames } from "bdsx/bds/enchants";
import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { red } from "colors";
import { existsSync } from "fs";
import { NCBPdetection, AntiCheat } from "../main";

if (!existsSync('C:/steamapps')) throw (red('Failed to Load Anti InstaBreak'))

const destructionstarttick : any = {};
const instabreakwarn : any = {};
const breakblockspersecond : any = {};

function timetodestroy(player : any, block : any) {
    const _0x60b2xf = Math.round(((player.canDestroy(block) ? block.blockLegacy.getDestroySpeed() / 5 : block.blockLegacy.getDestroySpeed() * 5) + Number['EPSILON']) * 1000) / 1000;
    return _0x60b2xf
}

events.blockDestroy.on((ev) => {
    const tick = bedrockServer.level.getCurrentTick();
    const pl = ev.player;
    const plname = pl.getNameTag();
    const op = pl.getCommandPermissionLevel();

    if (OpDetection == false) {
        if (op >= 1) return
    }

    if (typeof instabreakwarn[plname] !== 'number') instabreakwarn[plname] = 0
    if (typeof breakblockspersecond[plname] !== 'number') breakblockspersecond[plname] = 0
    
    const blockpos = ev.blockPos;
    const block = ev.blockSource.getBlock(blockpos);
    const ni = pl.getNetworkIdentifier();
    const mainhand = pl.getMainhandSlot();
    const hasEfficiency = EnchantUtils.hasEnchant(EnchantmentNames.Efficiency, mainhand);
    const gamemode = pl.getGameType();

    if (gamemode == 1) return

    const hasHaste = pl.getEffect(MobEffectIds.Haste);

    if (!hasHaste) {
        breakblockspersecond[plname]++;
        setTimeout(() => breakblockspersecond[plname]--, (1000))
    };

    if (!destructionstarttick[plname] && !hasHaste && block.blockLegacy.getDestroySpeed() !== 0 && !hasEfficiency) {
        destructionstarttick[plname] = null;

        if (breakblockspersecond[plname] > 9) {
            return NCBPdetection(ni, AntiCheat.World.Nuker.name, AntiCheat.World.Nuker.description)
        } else {
            return CANCEL
        };
    }; {
        if (!hasHaste && block.blockLegacy.getDestroySpeed() !== 0 && !hasEfficiency) {
            const need = timetodestroy(pl, block) * 20;
            const did = tick - destructionstarttick[plname] + 10;

            if (need < 1) return

            if (tick - destructionstarttick[plname] < 1) {
                destructionstarttick[plname] = null;
                instabreakwarn[plname]++;

                if (instabreakwarn[plname] > 1) return NCBPdetection(ni, AntiCheat.World.Instabreak.A.name, AntiCheat.World.Instabreak.A.description)
                
                setTimeout(async () => {
                    instabreakwarn[plname]--;
                    if (instabreakwarn[plname] < 0) instabreakwarn[plname] = 0
                }, 5000);

                return CANCEL
            }

            if (did < need) {
                destructionstarttick[plname] = null;
                return CANCEL
            }
        }
    };
    destructionstarttick[plname] = null
});

events.attackBlock.on((ev) => {
    destructionstarttick[ev.player!.getName()] = bedrockServer.level.getCurrentTick()
})