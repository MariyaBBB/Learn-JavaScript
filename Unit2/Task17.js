"use strict";

function pow(x, n) {
    let result = 1;
    for (let i = 1; i < n; i++) {
        result = x * result;
    }
    return result;
}



let x = prompt('Введите х', '');
let n = prompt('Введите n', '');

if (n<1) {
    alert("Недопустимая степень")
} else {
    let result = pow(x,n);
    alert(result);
}
