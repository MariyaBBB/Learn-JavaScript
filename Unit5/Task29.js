"use strict";

function formatDate(date) {
    let now = new Date();
    let rez = +now - +date;
    if(rez <= 1000) {
        alert('Прямо сейчас');
    }
    else if(rez <= 60*1000) {
        let sec = rez / 1000;
        alert(`${sec} секунд назад`);
    } else if(rez <= 60*60*1000) {
        let min = rez / 60000;
        alert(`${min} минут назад`);
    }
    else {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        alert(`${day}.${month}.${year} ${hours}:${minutes}`);
    }
}

formatDate(new Date(new Date - 1)); // "прямо сейчас"
formatDate(new Date(new Date - 30 * 1000)); // "30 сек. назад"
formatDate(new Date(new Date - 5 * 60 * 1000)); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
formatDate(new Date(new Date - 86400 * 1000));