"use strict";

function getSecondsToTomorrow() {
    let now = new Date();
    let secOfToday = now.getSeconds() + now.getMinutes()*60 + now.getHours()*3600;
    let secToTom = 86400 - secOfToday;
    return secToTom;
}

alert(getSecondsToTomorrow());