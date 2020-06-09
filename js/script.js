'use strict';
// Детерминированная функция зависит только от входных данных
// Чистая функция: Детерминированная и без побочных эффектов



function foo(a) {
    const sum = a + Math.random();
    return sum;
}

console.log(foo(2));






















// function one(callback) {
//     console.log('Делаем запрос на сервер');
//     setTimeout(function () {
//         console.log('Получаем данные от сервера');
//         callback();
//     }, 1000);
// }

// function two() {
//     console.log('Выводим на страницу');
// }

// one(two);