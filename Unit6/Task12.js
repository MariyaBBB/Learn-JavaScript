"use strict";

function sum(a) {
    let sumOf = a;
    function f(b) {
        sumOf += b;
        return f;
    }

    f.toString = function() {
        return sumOf;
    }

    return f;

}

alert(sum(1)(2)(3));
alert(sum(1)(2)(3)(4));
alert(sum(1)(2)(3)(4)(5));