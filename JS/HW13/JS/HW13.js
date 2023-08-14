'use strict'

const imagesArray = ['1.jpg', '2.jpg', '3.jpg', '4.png']
let COUNT = 1

const div = document.querySelector('.imageSlide')
div.classList.add('mainDiv')

// IMG
const img = document.createElement('img')
img.classList.add('image')
img.src = './img/1.jpg'
div.appendChild(img)

// BUTTONS
const buttons = document.querySelector('.buttons')
div.appendChild(buttons)
const btn_1 = document.createElement('button')
const btn_2 = document.createElement('button')
btn_1.classList.add('btn')
btn_2.classList.add('btn')
btn_1.innerText = 'Припинити'
btn_2.innerText = 'Відновити показ'
buttons.appendChild(btn_1)
buttons.appendChild(btn_2)

btn_2.addEventListener('click', e => {
  mainFunc()
})

const timer = () => {
  if (COUNT < 4) {
    const time = setTimeout(() => {
      img.src = `./img/${imagesArray[COUNT]}`
      COUNT++
      timer()
    }, 3000);
    btn_1.addEventListener('click', e => {
      clearTimeout(time)
    })
  } else {
    COUNT = 0
    timer()
  }
}

const mainFunc = () => {
  timer()
}

mainFunc()
