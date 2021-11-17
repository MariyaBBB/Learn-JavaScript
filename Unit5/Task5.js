"use strict";

function ucFirst(str) {

    let modStr = str[0].toUpperCase() + str.slice(1);
    alert(modStr);
    
    return modStr;
}

ucFirst('мария');