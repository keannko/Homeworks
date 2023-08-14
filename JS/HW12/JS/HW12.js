'use strict'

const buttons = document.querySelectorAll('.btn')

buttons.forEach(item => {
  document.addEventListener('keydown', e => {
    item.classList.remove('blue')
      if (e.code === correctEvent(item.innerText)) {
        item.classList.add('blue')
      }
  })
})

const correctEvent = (text) => {
  return text.length == 1 ? 'Key' + text : text
}

