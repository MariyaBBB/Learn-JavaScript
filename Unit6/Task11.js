"use strict";
let makeCounter = function func() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.decrease = () => count--;
    counter.set = value => count = value;


    return counter;
  }
  
  let counter = makeCounter();
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  alert( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  alert( counter() ); //