'use strict'


const content = document.querySelector('.content')

if (sessionStorage.getItem('bg') === 'yellow') {
  content.classList.add('yellow')
}

const changeColor = () => {
  content.classList.toggle('yellow')
  content.classList.contains('yellow') ? sessionStorage.setItem('bg', 'yellow') : sessionStorage.setItem('bg', 'lightgreen');
}
