"use strict";

function spy(func) {

    decorator.calls = [];
    
    function decorator(...args) {
        decorator.calls.push(args);
        return func.apply(this, arguments);
    }

    return decorator;
}

function work(a, b) {
    alert(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert('call:' + args.join()); // "call:1,2", "call:4,5"
}