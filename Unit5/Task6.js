"use strict";

function checkSpam(str) {

    let lowerStr = str.toLowerCase();
    if(lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
        return true;
    }

    else return false;
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));