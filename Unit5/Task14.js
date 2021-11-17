"use strict";

function Calculator() {

    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }

    this.calculate = function(str) {
        let result = str.split(' ');
        
        let a = +result[0];
        let operator = result[1];
        let b = +result[2];

        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        else return this.methods[operator](a,b);

    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}
let calc = new Calculator;

alert( calc.calculate("3 + 7") );
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8