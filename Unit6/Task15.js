"use strict";

function f(x) {
    alert(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('text');
f1500('text');

function delay(func, ms) {

    return function () {
        setTimeout(()=> func.apply(this, arguments), ms);
    }

}