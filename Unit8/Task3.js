"use strict";

function Rabbit() {

} 

let obj = new Rabbit();

Rabbit.prototype = {
    jumps: true
}

let obj2 = new obj.constructor();