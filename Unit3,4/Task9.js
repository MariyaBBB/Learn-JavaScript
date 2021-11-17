"use strict";

function camelize(str) {

    let arr = str.split('-');
    
    let arr1 = arr.map((word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));

    return arr1.join('');

}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));