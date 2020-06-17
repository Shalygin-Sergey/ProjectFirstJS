'use strict';
// let str = '123выфвыфвы';

// let patternAbc = /[а-яё]\D/gi;

// let result = patternAbc.test(str);
// console.log(result);

// let test = 'какой то текст';
// [...test.matchAll(patternAbc)]

// const isText = function (str) {
//     const pattern = /^[а-яё]\D/gi;
//     return str.match(pattern);
// }


// let arr = ['kokko', 'mokko', 'sagitarius', 'petrovich', 'eduvanchik verhovsjoi'];
// for (let i = 0; i < arr.length; i++) {
//     arr[i].trim()[0].toUpperCase() + arr[i].trim().slice(1).toLowerCase();
// }

// let addEx = [];
// for (let i = 0; i < arr.length; i++) {
//     addEx.push(arr[i].trim()[0].toUpperCase() + arr[i].trim().slice(1).toLowerCase());
// }

// console.log(addEx.join(', '));


let arr = appData.addExpenses.split(',');
for (let i = 0; i < arr.length; i++) {
    arr[i].trim()[0].toUpperCase() + arr[i].trim().slice(1).toLowerCase();
}

let addExpenses = [];
for (let i = 0; i < arr.length; i++) {
    addExpenses.push(arr[i].trim()[0].toUpperCase() + arr[i].trim().slice(1).toLowerCase());
}

console.log(addEx.join(', '));