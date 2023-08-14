'use strict'
import { Programmer } from "./classes/Programmer.js";

// - Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript
//     Когда мы хотим прочитать свойство которого нет, JavaScript берёт его из прототипа.
// - Для чого потрібно викликати super() у конструкторі класу-нащадка?
//     Функция которая вызывает родительский конструктор


  const programmer1 = new Programmer("John", 25, 1000, ["English", "German"]);
  const programmer2 = new Programmer("Jane", 30, 1500, ["French", "Denmark"]);
  console.log(programmer1);
  console.log(programmer2);

//   let test = new Employee('Igor', 22, 350)
//   console.log(test)
//   test.name = 'Petro'
//   console.log(test.name)
//   console.log(test.name)
  