'use strict';

// Diferencias antiguo frente a ES6
/////////////////// Funciones
// es5
function newfunction(name,age,country) {
    var name = name || 'Bárbara';
    var age = age || 34;
    var country = country || 'ES';
    console.log(name, age, country);
};

newfunction();

// es6

function newFunction2 (name='Bárbara', age=34, country= 'ES') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Lara', 24, 'MX');

//////////////// Concatenar
// es5
let hello= "Hello";
let world= "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

///////////// Saltos línea
// es5
let lorem = "lorem ipsum asdas lkdlaskd askdlasdkldas lasdkaldkasd \n"
+ "otra frase nueva";

console.log(lorem);

// es6

let lorem2 = `ortra frase épida adjaskdjasjkdjsa
Y salto de línea aquí`;

console.log(lorem2);

///////////// Destructuring

let person = {
    'name': 'Bárbara',
    'age': 34,
    'country': 'ES'
}

// es5
console.log(person.name,person.age, person.country);

// es6

let {name, age, country} = person;

console.log(name, age, country);

// es6 operador de propagación / spread operator

let team1 = ['Bárbara', 'Lara', 'Bea'];
let team2 = ['Alba', 'Marta', 'Juana'];
let education = ['David', ...team1, ...team2];

console.log(education);

////////////// Variables y constantes
// es5
{
var globalVar= 'hola' // disponible de forma global
}

// es6

{
let globalLet= 'hola' // disponible en el scope
console.log(globalLet);
}

// console.log(globalVar,globalLet); Comento solo para que se siga ejecutando el resto del código.

// const a = 'b';
// a = 'a';

// console.log(a); // "Assignment to constant variable"



///////////////// Creación objetos

// es5
const obj = {
    name: name, age: age
}

// es6
const obj2 = {name, age}

console.log(obj, obj2);


/////////////// Funciones arrow
// es5
const names = [{name: 'Bárbara', age:34},{name: 'Lara', age:34} ];

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

// es6

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    // ...
};

const listOfNames4 = name => {
    // ...
};

const square = num => num * num; // no necesario "return"


///////////////// Promesas *soluciona el callback hell

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    })
};

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));

/////////////////// Clases
// es6
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA,valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,3));

/////////////// Módulos (import y export)

import helloThere from './module.js';

helloThere();

///////////// Generators

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);