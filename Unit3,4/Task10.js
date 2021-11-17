"use strict";

 function filterRange(arr, a, b) {
    let result = arr.filter(item => item >= a && item <= b ? item : 0);
    return result;
 }

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)