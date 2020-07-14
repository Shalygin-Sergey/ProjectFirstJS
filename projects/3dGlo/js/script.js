// Пишем обработчик событий что бы все прогружалось после того ка загрузится ДОМ-дерево 
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');



        function getTimeRemainig() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60) % 25,
                day = Math.floor(timeRemaining / 60 / 60 / 24);


            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };

        }

        function addZero(n) {
            if (n < 10) {
                return '0' + n;
            } else {
                return n;
            }
        }

        function upDateClock() {
            let timer = getTimeRemainig();


            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);

            if (timer.timeRemaining > 0) {
                setTimeout(upDateClock, 1000);
            } else if (timer.timeRemaining <= 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }

        }

        upDateClock();

    }

    // countTimer('13 july 2020');
    setInterval(countTimer, 1000, '14 july 2020');


    // Меню

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        // Создаем функцию которая повторяется в btnMenu, closeBtn и в цикле
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        // Навешиваем обработчик на клик по меню
        btnMenu.addEventListener('click', handlerMenu);
        // Вешаем обработчик на крестик что бы закрывать
        closeBtn.addEventListener('click', handlerMenu);

        // Создаем цикл в котором по кол-ву наших пунктов в меню будет происходить закрытие
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    }
    toggleMenu();

});