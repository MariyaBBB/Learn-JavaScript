"use strict";

class Calculator {
    _logs = [];

    _calc(left, operation, right) {
        this._logs.push({left: left, operation: operation, right: right});

        switch (operation) {
            case '+':
                return left + right;

            case '-':
                return left - right;

            case '/':
                return left / right;

            case '*':
                return left * right;

        }
    }

    plus(left, right) {
        return this._calc(left, '+', right);
    };

    minus(left, right) {
        return this._calc(left, '-', right);
    };

    div(left, right) {
        return this._calc(left, '/', right);
    };

    mul(left, right) {
        return this._calc(left, '*', right);
    };

    get history() {
        return this._logs;
    }

} 

let calcul = new Calculator;

console.log(calcul.plus(5, 6));
console.log(calcul.minus(5, 6));

console.log(calcul.history);

