// Теория!

// 1. Описати своїми словами у кілька рядків, навіщо у програмуванні потрібні цикли.
//     Цикли потрібні тоді, коли є якийсь діапазон даних й треба перебрати кожен елемент цього діапазону на якусь відповідність.
// 2. Опишіть у яких ситуаціях ви використовували той чи інший цикл в JS.
    // Цикл необхідний, наприклад, коли необхідно вивести кожне число яке ділиться на 5 в заданому діапазоні чисел.
// 3. Що таке явне та неявне приведення (перетворення) типів даних у JS?
    // явне - свідоме перетворення
    // неявне - автоматичне перетворення

let usersInput = prompt('Enter your number')
let usersNumber = parseInt(usersInput, 10)

while (true) {
    if (usersInput != usersNumber) {
        usersInput = prompt('Enter your number')
        usersNumber = parseInt(usersInput, 10)
    }else{
        parseNumber(usersNumber)
        break
    }
}


function parseNumber(userNumber) {
    let numbersCount = 0
    for (let i = 1; i <= userNumber; i++)
        if (i % 5 === 0) {
            console.log(i)
            numbersCount += 1
        }
    if (numbersCount === 0) {
        console.log('Sorry, no numbers')
    }
}


