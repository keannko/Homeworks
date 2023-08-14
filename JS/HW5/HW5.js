"use strict"
// Теоретичні питання

// 1. Опишіть своїми словами, що таке метод об'єкту
// Это функции которые являются свойствами объекта
// 2. Який тип даних може мати значення властивості об'єкта?
// Любой тип данных
// 3. Об'єкт це посилальний тип даних. Що означає це поняття?
// Возможность использовать ссылки на значения на другое значение

const createNewUser = () => {
  const userName = (text = 'Enter your name') => prompt(text);
  const userSurname = (text = 'Enter your Surname') => prompt(text);
  const newUser = {
    firstName: userName(),
    lastName: userSurname(),
    getLogin() {
      const result = this.firstName.substring(0, 1) + this.lastName;
      return result.toLowerCase();
    },
    setFirstName(name) {
      this.firstName = name;
    },
    setLastName(surname) {
      this.lastName = surname;
    },
  }

  Object.defineProperty(newUser, "firstName", {
    writable: false,
    configurable: false,
    enumerable: true,
  });

  return newUser;
}


const myUser = createNewUser().getLogin()
console.log(myUser)
