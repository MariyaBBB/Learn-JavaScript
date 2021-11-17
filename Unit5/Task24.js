"use strict";

let date = new Date(2014, 0, 3);


function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];1
  return days[date.getDay()];
}

alert(getWeekDay(date));