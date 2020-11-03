'use strict';

//ES9 Nace en Junio de 2018

// Operador de reposo

const obj = {
    name: 'Bárbara',
    age: 34,
    country: 'ES'
}

let { name, ...all } = obj;
console.log(name, all);


const obj1 = {
    ...obj,
    music: 'classical'
}

console.log(obj1);


// Promise.finally

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(()=> resolve('Hello world'),3000)
        : reject (new Error('Test Error'))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=> console.log('Finalizó'));


// Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2019-06-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
