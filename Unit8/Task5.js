"use strict";

Function.prototype.defer = function(ms) {
    let func = this;
    function decorator(...args) {
        setTimeout(() => func.apply(this, args), ms);
    }
    return decorator;
}

function f(a, b) {
    alert( a + b );
  }
  
  f.defer(5000)(1, 2);