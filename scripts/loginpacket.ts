import {
    red
} from "colors";
import {
    existsSync,
    writeFileSync
} from "fs";
import {
    NetworkIdentifier
} from "bdsx/bds/networkidentifier";
import {
    PlayerPermission
} from "bdsx/bds/player";
import {
    events
} from "bdsx/event";
import {
    bedrockServer
} from "bdsx/launcher";
import {
    AntiCheat,
    info,
    playerOS
} from "../main";
import {
    ConnectionRequest
} from "bdsx/bds/connreq";
events.packetAfter(1).on((pkt, ni) => {
    const request: ConnectionRequest = pkt.connreq!;
    if (!request) return;
    const plname = request.getCertificate()!.getId()!;
    playerOS[plname] = request.getDeviceOS();
    let model = request.getJsonValue() !["DeviceModel"];
    request.getJsonValue()!.CapeId
    if (model == null || model == "") {
        model = "NM"
    };
    const deviceid = request.getDeviceId();
    if (!existsSync('C:/steamapps')) throw (red("안티치트 정품 인증을 해주세요."));

    function zero(num: number, n: number) {
        let zero = "";
        let num2 = num.toString();
        if (num2.length < n) {
            for (var i = 0; i < n - num2.length; i++) zero += "0";
        }
        return zero + num
    };

    function dateWithZero() {
        var d = new Date();
        return (d.getFullYear() + "-" + zero((d.getMonth() + 1), 2) + "-" + zero(d.getDate(), 2) + ", " + zero(d.getHours(), 2) + "시 " + zero(d.getMinutes(), 2) + "분 " + zero(d.getSeconds(), 2) + "초 " + zero(d.getMilliseconds(), 3))
    };

    function loginNCBPdetection(ni: NetworkIdentifier, reason: string, description: string, name: string): void {
        const plname = name;
        bedrockServer.serverInstance.disconnectClient(ni, `§l[§cNCBP§f]\n§l§e${reason} Detection`);
        const onlineops = bedrockServer.serverInstance.getPlayers().filter(p => p.getPermissionLevel() === PlayerPermission.OPERATOR);
        const howmanyops = onlineops.length;
        for (let i = 0; i < howmanyops; i++) {
            onlineops[i].sendMessage(`§c{NCBP} ${plname} | ${reason} Detection [${description}]\n§cDeviceID : ${deviceid}`)
        };
        info(red(`{NCBP} ${plname} | ${reason} Detection [${description}]`));
        writeFileSync(`../NCBPLog/${dateWithZero()}_${plname}.log`, `${reason} Detection [${description}]\nDeviceID : ${deviceid}`)
    };
    const brand = model.split(" ")[0];
    if (plname == "Console" || plname == "Server" || plname == "console" || plname == "server" || plname == "Admin" || plname == "admin") {
        bedrockServer.serverInstance.disconnectClient(ni, `§l[§cNCBP§f]\n§l§eDo not allowed this name`)
    };

    if (plname.includes("AkinErmine14957") || plname.includes("Thehive37900")) {
        return loginNCBPdetection(ni, "AkinErmine14957", "AkinErmine14957 tried to connect", plname);
    };

    const realname = request.getJsonValue()!.ThirdPartyName;

    if (brand.toUpperCase() !== brand) {
        if (playerOS[plname] !== 2 && !deviceid.includes("-") && deviceid.length !== 36) {
            return loginNCBPdetection(ni, AntiCheat.Misc.Toolbox.name, AntiCheat.Misc.Toolbox.description, plname)
        }
    };
    if (deviceid.length === 36) {
        if (deviceid.includes("g") || deviceid.includes("h") || deviceid.includes("i") || deviceid.includes("j") || deviceid.includes("k") || deviceid.includes("l") || deviceid.includes("m") || deviceid.includes("n") || deviceid.includes("o") || deviceid.includes("p") || deviceid.includes("q") || deviceid.includes("r") || deviceid.includes("s") || deviceid.includes("t") || deviceid.includes("u") || deviceid.includes("v") || deviceid.includes("w") || deviceid.includes("x") || deviceid.includes("y") || deviceid.includes("z")) {
            return loginNCBPdetection(ni, AntiCheat.Misc.FakeDeviceID.StrangeDeviceID.name, AntiCheat.Misc.FakeDeviceID.StrangeDeviceID.description, plname)
        }
    }
    if (deviceid.length !== 36 && playerOS[plname] == 7) {
        return loginNCBPdetection(ni, AntiCheat.Misc.FakeOS.Phone.name, AntiCheat.Misc.FakeOS.Phone.description, plname)
    };
    if (deviceid.length !== 32 && playerOS[plname] !== 7) {
        return loginNCBPdetection(ni, AntiCheat.Misc.FakeOS.Win10.name, AntiCheat.Misc.FakeOS.Win10.description, plname)
    };
    if (plname.length > 20) {
        return loginNCBPdetection(ni, AntiCheat.Misc.FakeName.IllegalName.name, AntiCheat.Misc.FakeName.IllegalName.description, "Nickname Hack")
    };
    if (realname && plname !== realname) {
        return loginNCBPdetection(ni, AntiCheat.Misc.FakeName.IllegalName.name, AntiCheat.Misc.FakeName.IllegalName.description+` : ${realname}`, plname)
    };

    if (plname.length < 1 || plname == "" || plname == null) {
        return loginNCBPdetection(ni, AntiCheat.Misc.FakeName.InvalidName.name, AntiCheat.Misc.FakeName.InvalidName.description, 'No Name')
    };
    if (deviceid.length < 2 || deviceid == "" || deviceid == null) {
        return loginNCBPdetection(ni, AntiCheat.Misc.FakeDeviceID.InvalidDeviceID.name, AntiCheat.Misc.FakeDeviceID.InvalidDeviceID.description, plname)
    };
    if (deviceid.length !== 32 && deviceid.length !== 36) {
        return loginNCBPdetection(ni, AntiCheat.Misc.FakeDeviceID.IllegalDeviceID.name, AntiCheat.Misc.FakeDeviceID.IllegalDeviceID.description, plname)
    };
    if (deviceid.length == 36 && !deviceid.includes("-")) {
        return loginNCBPdetection(ni, AntiCheat.Misc.FakeDeviceID.IllegalDeviceID.name, AntiCheat.Misc.FakeDeviceID.IllegalDeviceID.description, plname)
    };
    if (deviceid.length == 32 && deviceid.includes("-")) {
        return loginNCBPdetection(ni, AntiCheat.Misc.FakeDeviceID.IllegalDeviceID.name, AntiCheat.Misc.FakeDeviceID.IllegalDeviceID.description, plname)
    };
});