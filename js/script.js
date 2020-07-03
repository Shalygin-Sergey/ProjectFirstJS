'use strict';




function setCookie(key, value, year, month, day, path, domain, secure) {
    let cookieStr = key + '=' + value;
    if (year) {
        const expires = new Date(year, month, day);
        cookieStr += '; expires=' + expires.toGMTString();
    }

    cookieStr += path ? '; path=' + path : '';
    cookieStr += domain ? '; domain=' + domain : '';
    cookieStr += secure ? '; domain=' + secure : '';

    document.cookie = cookieStr;



}

setCookie('Привет', 'мир');

setCookie('Любимый праздник детей', 'Новый год', 2021, 1, 1);




















// const inputText = document.getElementById('myText'),
//     myBtn = document.getElementById('myBtn'),
//     text = document.getElementById('text');

// const showText = function () {
//     text.textContent = localStorage.getItem('memory');
// };

// myBtn.addEventListener('click', function () {
//     localStorage.setItem('memory', inputText.value);
//     showText();

// });

// localStorage.removeItem('myText');

// showText();