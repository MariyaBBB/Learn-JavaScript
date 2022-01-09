"use strict";

function printNumbers(from, to) {
  let timerID = setInterval(() => {
    alert(from);
    if(from == to) {
        clearInterval(timerID);
    }
    from++;
  },1000);
  
}

//printNumbers(10, 21);

function printNumbers2(from, to) {
    let count = from;
    setTimeout(function aler() {
        alert(count);
        if(count < to) {
            setTimeout(aler, 1000);
            count++;
        }

    }, 1000);
    
   
}

printNumbers2(10, 21);
