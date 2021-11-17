"use strict";

function random(min, max) {
    let num = min + Math.random()*(max - min);
    return num;
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

function randomInteger(min, max) {
    let num = min + Math.random()*(max - min + 1);
    return Math.floor(num);
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );