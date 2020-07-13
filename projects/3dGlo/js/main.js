'use strict';
// Получаем наши дивы в переменные
const one = document.querySelector('.one'),
    two = document.querySelector('.two'),
    three = document.querySelector('.three');

// Создаем проверку какое время дня и ночи и выводим приветствие
function hello() {
    let h = (new Date()).getHours();

    if (h > 23 || h < 7) {
        one.textContent = 'Привет, ночь на дворе :)';
    } else if (h > 6 && h < 12) {
        one.textContent = 'Доброе утро! Выспался? :)';
    } else if (h > 11 && h < 19) {
        one.textContent = 'Добрый день!';
    } else if (h > 18 && h < 24) {
        one.textContent = 'Привет! Уже вечер, кстати... домой не пора?';
    }
}
hello();

// Создаем массив дней недели и вызываем ее после функции
function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];

}
let date = new Date();
two.textContent = 'Сегодня: ' + getWeekDay(date);

// Получаем текущее время с помощью toLocaleTimeString
three.textContent = 'Текущее время: ' + date.toLocaleTimeString() + ' PM';

// Создаем обратный таймер и считаем дни недели до нового года
function countTimer(deadline) {
    let four = document.querySelector('.four');

    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        day = Math.floor(timeRemaining / 60 / 60 / 24);

    four.textContent = 'До  нового года осталось ' + day + ' дней';
}

countTimer('1 January 2021');