'use strict'

for (let i of document.querySelectorAll('.tabs-content__data')) {
    i.classList.add('displayNone')
}

const addListener = () => {
    const listItem = document.querySelectorAll('.tabs-title')
    listItem.forEach(item => {
        item.addEventListener('click', e => {
            for (let i of document.querySelectorAll('.tabs-content__data')) {
                if (i.classList.contains('display') || i.classList.contains('displayNone')) {
                    i.classList.remove('display')
                    i.classList.remove('displayNone')
                }
                if (i.getAttribute('id') === e.target.innerText) {
                    i.classList.add('display')
                } else {
                    i.classList.add('displayNone')
                }
            }
        })
    })
}



addListener()