'use strict';

//ES7 Nace en Junio de 2017

// Object.entries Object.values

const data= {
    frontend: 'Bárbara',
    backend: 'Adrián',
    design: 'Lara'
}

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

const values = Object.values(data);
console.log(values);

console.log(values.length);


// padding

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' abc'));

console.log('food'.padEnd(12, ' abc'));


