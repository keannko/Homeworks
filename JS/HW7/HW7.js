"use strict"

// Опишіть своїми словами як працює метод forEach.
// callback для каждого элемента массива
// Як очистити масив?
// установить длинну 0
// Як можна перевірити, що та чи інша змінна є масивом?
// Array.isArray=true

const filterBy = (array, typeOfData) => {
    console.log(array.filter(array => typeof array != typeOfData))
}

filterBy(['hello', 'world', 23, '23', null, 1, 2, 'hi'], 'string')