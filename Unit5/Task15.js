"use strict";

function unique(arr) {
    let set = new Set(arr);
    let newArray = [];
    set.forEach((value, againValue, set) => newArray.push(value));
    return newArray;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); 