"use strict";

let user = {
    name: 'John',
    age: 30
};

let {name, age: years, isAdmin = false} = user;

alert( name );
alert(years);
alert(isAdmin);