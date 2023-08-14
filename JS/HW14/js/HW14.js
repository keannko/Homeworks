'use strict'

const button = document.querySelector('.btn-chg')
const content = document.querySelector('.content')

if (sessionStorage.getItem('bg') === 'yellow') {
  content.classList.add('yellow')
}

button.addEventListener('click', e => {
  content.classList.toggle('yellow')
  if (content.classList.contains('yellow')) {
    sessionStorage.setItem('bg', 'yellow')
  } else {
    sessionStorage.setItem('bg', 'lightgreen')
  }
})

