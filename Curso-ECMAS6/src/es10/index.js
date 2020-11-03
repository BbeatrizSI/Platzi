'use strict';

//ES10 Nace en Junio de 2019

//  Flat flatMap

let array = [1,2,3, [1,2,3 [1,2,3]]];

console.log(array.flat(2));

let array2 = [1,2,3, 4,5];
console.log(array2.flatMap(value => [value, value * 2]));


// Trim

let hello = '               hello world  ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());


// Try catch

// Transformar arreglos en objetos

let entries = [["name", "Bárbara"], ["age", 34]];

console.log(Object.fromEntries(entries));

// Symbol

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);