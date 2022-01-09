"use strict";

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list) {
    let tmp = list;
    let array = [];

    while(tmp) {
        array.push(tmp.value);
        tmp = tmp.next;
    }
    let n = array.length;
    for( let i = n - 1; i >= 0; i--) {
        alert(array[i]);
    }

    
}

printList2(list);

function printList2(list) {
    if(list.next) {
        printList2(list.next);
    }
     alert(list.value);

}