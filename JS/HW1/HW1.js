// Теорія!

// 1. Як можна оголосити змінну у Javascript?
    // змінну можна оголосити за допомогою let або const
// 2. У чому різниця між функцією prompt та функцією confirm?
//     prompt - май поле для введення даних
//     confirm - використовується для підтвердження (ok/cancel)
// 3. Що таке неявне перетворення типів? Наведіть один приклад.
    // неявне перетворення - це автоматичне перетворення типів при компіляції
    // приклад - 123 + ''


let _name = "Yaroslav"
let admin = _name
console.log(admin)

let days = 7
// 1день = 86400секунд
days = 7*86400
console.log(days +' '+'секунд')

let userInfo = prompt('Введіть якесь значення')
console.log(userInfo)