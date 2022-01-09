"use strict";

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator(undefined, {
    usage: 'sort',
    sensitivity: 'accent',
    numeric: true
});

animals.sort(collator.compare);


alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
