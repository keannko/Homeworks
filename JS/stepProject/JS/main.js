'use strict'

const array = [{
    code: './image/client-feedback_img/1.png',
    num: '1',
    name: 'hasan ali',
    prof: 'UX Designer',
    about: `Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.`,
},
{
    code: './image/client-feedback_img/2.png',
    num: '2',
    name: 'Nika',
    prof: 'HR',
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tenetur id ducimus laborum! Illum, voluptates fugiat adipisci consequuntur quis veritatis.`,
},
{
    code: './image/client-feedback_img/3.png',
    num: '3',
    name: 'Doma',
    prof: 'QA',
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enim deleniti veniam repellat iure ratione culpa saepe reprehenderit itaque! Id veniam eaque rerum, deserunt sint alias sit est quaerat modi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ab.`,
},
{
    code: './image/client-feedback_img/4.png',
    num: '4',
    name: 'Jane',
    prof: 'Engineer',
    about: `Lorem ipsum dolor sit amet const enim deleniti veniam repellat iure ratione culpa saepe reprehenderit itaque! Id veniam eaque rerum, deserunt sint alias sit est quaerat modi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nesciunt iure sunt accusantium consectetur labore?`,
}]

const servicesHover = () => {
    const listItem = document.querySelectorAll('.services__list-link');
    listItem[0].style.backgroundColor = '#18CFAB';

    for (let i of document.querySelectorAll('.services__content_text')) {
        if (i.getAttribute('id') === 'Web Design') {
            i.classList.add('display')
        } else {
            i.classList.add('displayNone');
        };
    };

    listItem.forEach(item => {
        item.addEventListener('click', e => {
            listItem.forEach(item => {
                item.style.backgroundColor = ''
            })
            for (let i of document.querySelectorAll('.services__content_text')) {
                if (i.classList.contains('display') || i.classList.contains('displayNone')) {
                    i.classList.remove('display');
                    i.classList.remove('displayNone');
                }
                if (i.getAttribute('id') === e.target.innerText) {
                    i.classList.add('display')
                    e.target.style.backgroundColor = '#18CFAB'
                } else {
                    i.classList.add('displayNone');
                };
            };
        });
    });
};

const mainPageButtonsClick = () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(item => {
        item.addEventListener('click', e => {
            alert('click');
        });
    });

};


const worksHover = () => {
    const worksList = document.querySelectorAll('.works__list-link')
    worksList[0].style.border = '2px solid #18CFAB';

    worksList.forEach(item => {
        item.addEventListener('click', e => {
            worksList.forEach(item => {
                item.style.border = '';
            })
            e.target.style.border = '2px solid #18CFAB';
        });
    });
};


const loadWorksImages = () => {
    const images = document.querySelectorAll('.sec2');
    const images_3 = document.querySelectorAll('.sec3');
    let countClick = 0

    images.forEach(item => {
        item.classList.add('displayNone');
    });
    images_3.forEach(item => {
        item.classList.add('displayNone');
    });
    const imagesLoadBtn = document.querySelector('.works__btn');

    imagesLoadBtn.addEventListener('click', e => {
        countClick++
        if (countClick === 1) {
            loadImages(images)
        } else {
            loadImages(images_3)
            imagesLoadBtn.classList.add('displayNone');
            countClick = 0
        }
    });
}

const loadImages = (images) => {
    images.forEach(item => {
        item.classList.remove('displayNone');
        item.classList.add('display');
    });
}


const worksFilter = () => {
    const categories = document.querySelectorAll('.works__list-link');
    const works = document.querySelectorAll('.block-img');

    categories.forEach(item => {
        item.addEventListener('click', e => {
            works.forEach(item => {
                item.classList.remove('display');
                item.classList.remove('displayNone');
                if (e.target.innerText === item.getAttribute('id')) {
                    item.classList.add('display');
                } else if (e.target.innerText === 'All') {
                    item.classList.add('display');
                } else {
                    item.classList.add('displayNone');
                };
            });
        });
    });
};


const worksImageBackside = () => {
    const images = document.querySelectorAll('.block-img');

    images.forEach(item => {
        item.addEventListener('mouseenter', e => {
            const back = item.querySelector('.works-imgs-back')
            if (!item.querySelector('.works-imgs-back')) {
                item.insertAdjacentHTML('beforeend', `<div class="works-imgs-back">
                                                    <div class="works-imgs-back__icon">
                                                        <img src="./image/work_imgs/back.png" alt="">
                                                    </div>
                                                    <div class="works-imgs-back__text">
                                                        <p>2creative design</p>
                                                        <p>Web Design</p>
                                                    </div>
                                                  </div>`)
            }
        });
    });
};


const clientsFeedback = () => {
    const avatars = document.querySelectorAll('.avatars-list__img')
    const mainAvatar = document.querySelector('.main-avatar')
    const about = document.querySelector('.client-about')
    let name = document.querySelector('.client-name')
    const prof = document.querySelector('.client-prof')

    avatars.forEach(item => {
        item.addEventListener('click', e => {
            mainAvatar.setAttribute('src', e.target.getAttribute('src'))
            array.forEach(i => {
                if (e.target.getAttribute('src') === i.code) {
                    name.innerText = i.name
                    prof.innerText = i.prof
                    about.innerText = i.about
                }
            })
        })
    })
}


const clientsFeedbackArrows = () => {
    const leftArrow = document.querySelector('.left')
    const rightArrow = document.querySelector('.right')
    const mainAvatar = document.querySelector('.main-avatar')
    const about = document.querySelector('.client-about')
    let name = document.querySelector('.client-name')
    const prof = document.querySelector('.client-prof')


    rightArrow.addEventListener('click', e => {
        let COUNT = document.querySelector('.main-avatar').getAttribute('src').split('').slice(-5, -4).toString()
        if (COUNT < 5) {
            COUNT++
            array.forEach(i => {
                if (COUNT == i.num) {
                    mainAvatar.setAttribute('src', i.code)
                    name.innerText = i.name
                    prof.innerText = i.prof
                    about.innerText = i.about
                }
            })
        }
    }
    )
    leftArrow.addEventListener('click', e => {
        let COUNT = document.querySelector('.main-avatar').getAttribute('src').split('').slice(-5, -4).toString()
        if (COUNT > 0) {
            COUNT--
            array.forEach(i => {
                if (COUNT == i.num) {
                    mainAvatar.setAttribute('src', i.code)
                    name.innerText = i.name
                    prof.innerText = i.prof
                    about.innerText = i.about
                }
            })
        }
    }
    )
}

servicesHover();
mainPageButtonsClick();
worksHover();
loadWorksImages();
worksFilter();
worksImageBackside();
clientsFeedback();
clientsFeedbackArrows();