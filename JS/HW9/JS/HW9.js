'use strict'

// 1. Опишіть, як можна створити новий HTML тег на сторінці.
// createElement, insertAdjacentHTML
// 2. Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра.
// отвечает за место вставки afterbegin, afterend, beforebefin, beforeend
// 3. Як можна видалити елемент зі сторінки?
// remove()



const someFunc = (array, parent = document.body) => {
    const list = document.createElement('ul');
    parent.prepend(list);
    array.map((item) => {
        if (Array.isArray(item)) {
            someFunc(item, list)
        } else {
            list.insertAdjacentHTML('afterbegin', `<li>${item}</li>`)
        }

    })
}


const timer = () => {
    let time = 3;
    const timeHtml = document.createElement('div');
    timeHtml.classList.add('timer');
    document.body.prepend(timeHtml);
    let timerId = setInterval(() => {
        timeHtml.innerText = `${time}`;
        time--;
    },
        1000);
    setTimeout(() => {
        clearInterval(timerId);
        const body = document.querySelector('body').style.display = 'none';
    },
        4000);
}


const a = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
const b = ["1", "2", "3", "sea", null, 23];
const c = [null, "Kiev", ["Borispol", "Irpin", "sadad", "asd "], "Odessa", "Lviv", "Dnieper"];

someFunc(c)
timer();