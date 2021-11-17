"use strict";

let user = {
    name: "Василий Иванович",
    age: 35,
};

let json = JSON.parse(JSON.stringify(user));

alert(json);