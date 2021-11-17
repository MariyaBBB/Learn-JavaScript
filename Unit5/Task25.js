"use strict";

let date = new Date(2012, 0, 3);

function getLocalDay(date) {
 let weekEurope = [7, 1, 2, 3, 4, 5, 6];
 return weekEurope[date.getDay()];
}

alert(getLocalDay(date));