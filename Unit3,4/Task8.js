"use strict";

function Calculator() {
    this.read = function() {
        let a = prompt('a?', '');
        let b = prompt('b?', '');

        this.number1 = +a;
        this.number2 = +b;
    };

    this.sum = function() {
        return this.number1 + this.number2;
    };

    this.mul = function() {
        return this.number1 * this.number2;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );