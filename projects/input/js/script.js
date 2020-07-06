'use strict';

const DomElement = function (selector, width, height, bg, fontSize, text) {
    this.selector = selector;
    this.width = width;
    this.height = height;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
}

DomElement.prototype.createElem = function () {
    let elem;

    if (this.selector.substring(0, 1) === '.') {
        elem = document.createElement('div');
        elem.classList.add(this.selector);
    } else if (this.selector.substring(0, 1) === '#') {
        elem = document.createElement('p');
        elem.setAttribute('id', this.selector)
    }

    elem.style.cssText = `
    	width: ${this.width}px;
      height: ${this.height}px;
      background-color: ${this.bg};
      font-size: ${this.fontSize}px;
    `;
    elem.textContent = `${this.text}`;

    document.body.insertAdjacentElement('beforebegin', elem);
}

const newDiv = new DomElement('.main', 100, 200, 'red', 12, 'i am div');
newDiv.createElem();
const newP = new DomElement('#main-p', 400, 150, 'green', 14, 'i am p');
newP.createElem();