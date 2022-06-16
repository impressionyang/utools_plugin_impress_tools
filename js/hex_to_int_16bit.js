function hex2int(hexStr) {
    let twoStr = parseInt(hexStr, 16).toString(2); // 将十六转十进制，再转2进制
    let bitNum = hexStr.length * 4; // 1个字节 = 8bit ，0xff 一个 "f"就是4位
    if (twoStr.length < bitNum) {
        while (twoStr.length < bitNum) {
            twoStr = "0" + twoStr;
        }
    }
    if (twoStr.substring(0, 1) == "0") {
        // 正数
        twoStr = parseInt(twoStr, 2); // 二进制转十进制
        return twoStr;
    } else {
        // 负数
        let twoStr_unsign = "";

        // console.log("hex2int--->" + parseInt(twoStr, 2));
        twoStr = parseInt(twoStr, 2) - 1; // 补码：(负数)反码+1，符号位不变；相对十进制来说也是 +1，但这里是负数，+1就是绝对值数据-1
        // console.log("hex2int--->" + twoStr);

        twoStr = twoStr.toString(2);
        twoStr_unsign = twoStr.substring(1, bitNum); // 舍弃首位(符号位)
        // 去除首字符，将0转为1，将1转为0   反码
        twoStr_unsign = twoStr_unsign.replace(/0/g, "z");
        twoStr_unsign = twoStr_unsign.replace(/1/g, "0");
        twoStr_unsign = twoStr_unsign.replace(/z/g, "1");

        // console.log("hex2int--->" + twoStr_unsign);
        // console.log("hex2int--->" + (-twoStr_unsign));
        twoStr = parseInt(-twoStr_unsign, 2);
        return twoStr;
    }
}
