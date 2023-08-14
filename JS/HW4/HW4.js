"use strict"
// Теорія!

// 1. Описати своїми словами навіщо потрібні функції у програмуванні.
// Створені функції можна використовувати багато разів і використовувати в різних місцях.
// 2. Описати своїми словами, навіщо у функцію передавати аргумент.
// Аргументи функції необхідні для обчислення(проведення дій над вхідними даними для отримання вихідних)
// 3. Що таке оператор return та як він працює всередині функції?
// Оператор return показує місце в якому функція завершує своє виконання, а також повертає вказані данні по завершенні виконання функції.


const getFirstNumber = (text = 'Enter first number') => Number(prompt(text));
const getSecondNumber = (text = 'Enter second number') => Number(prompt(text));
const getOperator = (text = 'Enter +, -, / or *') => prompt(text);

let userData = getInfo();
checkNumbers(userData.num1, userData.num2, userData.operator);

function getInfo() {
    let num1 = getFirstNumber();
    let num2 = getSecondNumber();
    let operator = getOperator();
    return { num1, num2, operator };
};

function checkNumbers(number1, number2, operator) {
    if (!number1 || !number2 || isNaN(number1) || isNaN(number2)) {
        let correctNumber1 = getFirstNumber();
        let correctNumber2 = getSecondNumber();
        checkNumbers(correctNumber1, correctNumber2, operator);
    } else {
        mathFunction(number1, number2, operator);
    };
};

function mathFunction(num1, num2, oper) {
    switch (oper) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        default:
            let correctOperator = getOperator()
            mathFunction(num1, num2, correctOperator)
    };
};



