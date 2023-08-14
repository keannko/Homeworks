"use strict"

const number1 = (text = 'Введите число F1') => Number(prompt(text));
const number2 = (text = 'Введите число F2') => Number(prompt(text));
const number3 = (text = 'Введите число n') => Number(prompt(text));


const fibonacci = (num1, num2, n) => {
    let result = 0
    for (let i = 3; i <= n; i++) {
        let fib = num1 + num2
        num1 = num2
        num2 = fib
        result = fib
    }
    displayFibonacci(result)
}

const displayFibonacci = (result) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('wrapper');
    p.classList.add('result');
    div.appendChild(p);
    document.body.prepend(div);
    p.innerText = result;
};

fibonacci(number1(), number2(), number3());
