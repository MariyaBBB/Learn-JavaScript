"use strict";

function printList(list) {
  alert(list.value);
  if (list.next) {
    return printList(list.next);
  }
}

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

printList2(list);

function printList2(list) {
  while(list) {
    alert(list.value);
    list = list.next;
  }
}

