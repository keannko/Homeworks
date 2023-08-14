"use strict"

// Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування
    // Экранирование - это выделение(соешем) слова, символа, строки для их  правильного функционирования в коде
// Які засоби оголошення функцій ви знаєте?
// function declaration, function expression, анонимная функция
// Що таке hoisting, як він працює для змінних та функцій?
// Hoisting - доступ к переменным до их определения.

const createNewUser = () => {
    const userName = (text = 'Enter your name') => prompt(text);
    const userSurname = (text = 'Enter your Surname') => prompt(text);
    const userBirthday = (text = 'Enter your Birthday Date') => prompt(text, "dd.mm.yyyy");
    const newUser = {
        firstName: userName(),
        lastName: userSurname(),
        birthday: userBirthday(),
        getLogin() {
            const result = this.firstName.substring(0, 1) + this.lastName;
            return result.toLowerCase();
        },
        getAge() {
            const splitDate = this.birthday.split('.')
            const day = splitDate[0].replace(/^0+/, '');
            const month = splitDate[1].replace(/^0+/, '');
            const year = splitDate[2];
            const dateNow = new Date();
            const yearNow = dateNow.getFullYear();
            const monthNow = dateNow.getMonth() + 1;
            const dayNow = dateNow.getDate();
            if (this.birthday.length === 10 && splitDate.length === 3) {
                if (yearNow > year) {
                    if (monthNow > month) {
                        return yearNow - year;
                    } else if (monthNow < month) {
                        return yearNow - year - 1;
                    } else if (monthNow == month && dayNow >= day) {
                        return yearNow - year;
                    } else {
                        return yearNow - year - 1;
                    }
                } else {
                    return 0;
                }
            }
        },
        getPassword() {
            return `${this.firstName.split("")[0].toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.split('.')[2]}`;
        },
    }
    return newUser;
}
const myUser = createNewUser()
console.log(myUser);
console.log(myUser.getAge());
console.log(myUser.getPassword());
