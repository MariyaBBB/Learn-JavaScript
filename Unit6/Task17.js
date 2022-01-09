"use strict";

function f(a) {
    alert(a);
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle2(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

function throttle(func, ms) {
    let isTrottled = false;
    let savedArgs, savedThis;

    function decorator() {

        if (isTrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        } else {
            func.apply(this, arguments);
            isTrottled = true;
        }

        setTimeout(function () {
            isTrottled = false;
            if (savedArgs) {
                decorator.apply(savedThis, savedArgs);
                savedArgs = null;
                savedThis = null;
            }
        }, ms);
    }
    return decorator;
}

function throttle2(func, ms) {
    let isTrottled = false;
    let savedArgs = [];
    let savedThis = [];

    function decorator() {

        if (isTrottled) {
            savedArgs.push(arguments);
            savedThis.push(this);
            return;
        } else {
            func.apply(this, arguments);
            isTrottled = true;
        }


        setTimeout(function () {
            isTrottled = false;
            if(savedArgs.length > 0) {
            decorator.apply(savedThis.shift(), savedArgs.shift());
            }
        }, ms);        
    }
    return decorator;
}