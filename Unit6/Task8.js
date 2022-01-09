"use strict";

function inBetween(a, b) {
    return  (x) => {  return x >= a && x <= b;  }
    
}

function inArray(mas) {
    return (x) => { return mas.includes(x); }
    
}


let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2