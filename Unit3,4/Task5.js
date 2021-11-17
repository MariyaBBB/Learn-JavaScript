"use strict";

let calculator = {

    read() {
        this.a = prompt('Введите значение 1', '');
        this.b = prompt('Введите значение 2', '');
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );