"use strict";

function  Accumulator(startingValue) {
    this.startingValue = +startingValue;
    this.value = +startingValue;

    this.read = function() {
        let addedValue = prompt('Введите число', '');
        this.value += +addedValue;
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений