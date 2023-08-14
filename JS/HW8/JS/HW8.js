"use strict"

// Опишіть своїми словами що таке Document Object Model (DOM)
// Объектное представление HTML кода
// Яка різниця між властивостями HTML-елементів innerHTML та innerText?
// innertext - формат текст, innerhtml - формат html
// Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
// document.querySelector()

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(item=>{
    item.style.backgroundColor = '#ff0000';
})


const item = document.querySelector('#optionsList');
console.log(item);
console.log(item.parentElement);
console.log(item.childNodes);


const item_2 = document.querySelector('#testParagraph');
item_2.textContent = 'This is a paragraph';

const item_3 = document.querySelector('.main-header').children;
for (const item of item_3) {
    item.classList.add('nav-item');
};
console.log(item_3);

const item_4 = document.querySelectorAll('.section-title');
item_4.forEach(item=>{
    item.classList.remove('section-title');
});

console.log(item_4);

