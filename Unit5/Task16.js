"use strict";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );

function aclean(array) {
    let map = new Map();

    for (let item of array) {
     let sorted = item.toLowerCase().split('').sort().join('');
        map.set(sorted, item);
    }
    return Array.from(map.values());
}