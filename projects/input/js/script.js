'use strict';

const num = document.querySelector('.num');
num.addEventListener('input', e => {
    const target = e.target;
    console.log(target.value);
    if (+target.value < 0 || +target.value > 100) {
        alert('введите корректное число от 0 до 100')
    }
});