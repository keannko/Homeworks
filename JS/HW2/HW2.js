// Теория!

// 1. Які існують типи даних у Javascript?
//     Boolean
//     BigInt
//     Number
//     String
//     Symbol
//     null
//     undefined
//     Object
// 2. У чому різниця між == і ===?
//     === враховуе тип данних при порівнянні(більш суворе порівняння) а == ні.
// 3. Що таке оператор?
//     внутрення функція js


let yourName = prompt('What is your name?')
let yourAge = prompt('How old are you?')


while (true) {
    if (yourName.length === 0 || isNaN(yourAge)) {
        yourName = prompt('What is your name?', yourName)
        yourAge = prompt('How old are you?', yourAge)
    } else {
        permission(yourName, parseInt(yourAge))
        break
    }
}


function permission(client_name, client_age) {
    if (client_age < 18) {
        alert('You are not allowed to visit this website')
    } else if (client_age >= 18 && client_age <= 22) {
        let welcome = confirm('Are you sure you want to continue?')
        if (welcome) {
            alert(`Welcome, ${client_name}`)
        } else {
            alert('You are not allowed to visit this website')
        }
    } else {
        alert(`Welcome ${client_name}`)
    }
}


