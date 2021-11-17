"use strict";

function getDateAgo(date, days) {
    let copyDate = new Date(date);
    copyDate.setDate(copyDate.getDate() - days);
    return copyDate;

}
let date = new Date(2015, 0, 2);
alert( getDateAgo(date, 1) ); 
alert( getDateAgo(date, 2) ); 
alert( getDateAgo(date, 365) );