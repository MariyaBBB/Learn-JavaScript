"use strict";

function sumToVar1(n) {
    let sum = 0;
    for( let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(sumToVar1(100));

function sumToVar2(n) {
    if(n == 1) {
        return n;
    } else {
        return n + sumToVar2(n - 1);
    }
}

alert(sumToVar2(100));

function sumToVar3(n) {
    return (1 + n) /2 * n;
}

alert(sumToVar2(100));