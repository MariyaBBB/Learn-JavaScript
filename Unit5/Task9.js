"use strict";

let styles = ['Джаз', 'Блюз'];
styles.push("Рок-н-ролл");
changeMiddle(styles);
alert(styles);
alert(styles.shift());
alert(styles);
styles.unshift('Рэп', 'Регги');
alert(styles);

function changeMiddle(styles) {
    styles[Math.round((styles.length-1)/2)] = 'Классика';
    return styles;
}