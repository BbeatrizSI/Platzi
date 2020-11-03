'use strict';

//ES7 Nace en Junio de 2017

// Object.entries

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