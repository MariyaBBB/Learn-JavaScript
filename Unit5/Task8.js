"use strict";

function extractCurrencyValue(str) {
    let newStr='';
    for (let char of str) {
        if(+char%1 == 0) {
            newStr += char;
        }
    }
    return newStr;
}

alert( extractCurrencyValue('A120'));