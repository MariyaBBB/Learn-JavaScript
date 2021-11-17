"use strict";

function readNumber() {

    let num;
    do {
         num = prompt('Введите число', 0);

    } while( !isFinite(num));

    if(num === '' || num === null) {
        return null;
    }
    else return(+num);
}

alert(readNumber());