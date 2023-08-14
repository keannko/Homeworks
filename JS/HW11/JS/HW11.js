'use strict'


const passLabel = document.querySelectorAll('.input-wrapper');
const form = document.querySelector('.password-form');


passLabel.forEach(label => {
    const passIcon = label.querySelector('.passIcon');
    const passInput = label.querySelector('[type=password]');
    passIcon.addEventListener('click', e => {
        if (passInput.getAttribute('type') === 'password') {
            passInput.setAttribute('type', 'text');
        } else {
            passInput.setAttribute('type', 'password');
        };
        if (passIcon.classList.contains('fa-eye')) {
            passIcon.classList.remove('fa-eye');
            passIcon.classList.add('fa-eye-slash');
        } else {
            passIcon.classList.remove('fa-eye-slash');
            passIcon.classList.add('fa-eye');
        };
    });
});


form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    if (data.get('password') === data.get('check-password')) {
        alert('You are welcome');
        if (!!document.querySelector('.info')) {
            document.querySelector('.info').remove();
        };
    } else {
        enterCorrectData();
    };
});

const enterCorrectData = () => {
    const data = document.createElement('div');
    const button = document.querySelector('.btn');
    data.innerText = "Потрібно ввести однакові знаки";
    data.classList.add('info');
    if (!!document.querySelector('.info')) {
        data.remove();
    } else {
        form.insertBefore(data, button);
    };
};
