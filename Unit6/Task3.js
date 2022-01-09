"use strict";

function fib(n) {
    let array = [];
    array[0] = 0;
    array[1] = 1;
    for( let i = 2; i <= n; i++) {
    array[i] = array[i-1] + array[i-2];
    }
    return array[n];
}

alert(fib(3));
alert(fib(7));
alert(fib(77));