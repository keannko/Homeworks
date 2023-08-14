"use strict"

const number = (text = 'Введите число', save = '') => prompt(text, save);

const mainFunc = (num) => {
    if (!num || isNaN(num)) {
        mainFunc(number('Введите корректное число', num));
    } else {
        factorial(num);
    };
};

const factorial = (numb) => {
    let result = 1;
    for (let i = 1; i <= numb; i++) {
        result *= i;
    };
    displayFactorial(result);
};

const displayFactorial = (result) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('wrapper');
    p.classList.add('result');
    div.appendChild(p);
    document.body.prepend(div);
    p.innerText = result;
};

mainFunc(number());
