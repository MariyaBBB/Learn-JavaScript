"use strict";

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'How goes?', from: 'John'},
    {text: 'See you soon', from: 'Alice'}
];

let whenMessageRead = new WeakMap();

whenMessageRead.set(messages[0], new Date(2021, 11, 9));
whenMessageRead.set(messages[1], new Date(2021, 10, 9));

alert(whenMessageRead.get(messages[0]));
alert(whenMessageRead.get(messages[1]));