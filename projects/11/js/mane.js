'use strict';

const books = document.querySelector('.books'),
    book = document.querySelectorAll('.book');

// Меняем местами книги на странице
books.prepend(book[1]);
book[4].after(book[3]);
books.append(book[2]);

console.log(books);
console.log(book);

// Меняем фон
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Удаляем рекламу
let adv = document.querySelector('.adv');
adv.remove();

// Меняем текст внутри h2 заголовка
const bookThreeText = document.querySelectorAll('a')[2];
bookThreeText.innerText = 'Книга 3. this и Прототипы Объектов';

// Меняем во 2 книге главы местами
const bookTwo = book[0].querySelectorAll('li');
bookTwo[9].after(bookTwo[2]);
bookTwo[3].after(bookTwo[6]);
bookTwo[6].after(bookTwo[8]);

// Меняем во 2 книге главы местами
const bookFive = book[5].querySelectorAll('li');
bookFive[1].after(bookFive[9]);
bookFive[9].after(bookFive[3]);
bookFive[3].after(bookFive[4]);
bookFive[7].after(bookFive[5]);

// Добавляем главу 8 в шестой книге
const bookSixUl = book[2].querySelector('ul');
const bookSixLi = book[2].querySelectorAll('li');
const newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
bookSixUl.append(newLi);
newLi.after(bookSixLi[9]);