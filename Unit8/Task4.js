"use strict";

Function.prototype.defer = function(ms) {
    let obj = this();
    alert(obj.name);
    return setTimeout(obj.func, ms);
}

function f() {

    alert('Hi');
    return {
        name: 'Igor',
        func: function () {
            alert('Hello!');
        }
    }
  }
  
  f.defer(1000);