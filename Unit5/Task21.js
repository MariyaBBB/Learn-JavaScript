"use strict";

let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.entries(obj).length;
}

alert( count(user));