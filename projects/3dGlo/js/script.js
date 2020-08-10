// Пишем обработчик событий что бы все прогружалось после того ка загрузится ДОМ-дерево 
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        let time;



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
                time.setInterval(upDateClock, 1000);
                clearInterval(time);
            } else if (timer.timeRemaining <= 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }

        }

        upDateClock();

    }

    // countTimer('13 july 2020');
    setInterval(countTimer, 1000, '21 july 2020');
    // Почему если ставить больше 1 дня часов покаывает не правильно?


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

    };
    toggleMenu();

    // POPUP

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content');

        let flyInterval;
        let count = 0;

        // Создаем анимацию модалки
        const popAnimation = function () {

            flyInterval = requestAnimationFrame(popAnimation);
            count++;

            if (count < 100) {
                popupContent.style.top = count + 'px';
            } else {
                cancelAnimationFrame(flyInterval);
            }

        };



        // Создали цикл показывать модальное окно
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (screen.width > 768) {
                    flyInterval = requestAnimationFrame(popAnimation);
                }

            });
        });
        // Закрытие на крестик модального окна
        // popUpClose.addEventListener('click', () => {
        //     popup.style.display = 'none';
        //     count = 0;
        // });

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }



        });

    };
    togglePopUp();

    // табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            // получаем элемент на который мы кликнули
            let target = event.target;

            target = target.closest('.service-header-tab');


            // проверка что мы кликнули конкретно по нашему табу
            if (target) {

                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });

            }
        });
    };

    tabs();


    // Slider

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dots = document.querySelector('.portfolio-dots'),
            slider = document.querySelector('.portfolio-content');


        for (let i = 0; i < slide.length; i++) {
            const newElem = document.createElement('li');
            newElem.classList.add('dot');
            dots.append(newElem);
        }
        const dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');


        // номер слайда
        let currentSlide = 0;
        let interval;


        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);

    };

    slider();

});