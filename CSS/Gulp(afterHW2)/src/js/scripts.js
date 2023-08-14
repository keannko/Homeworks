const burger = document.querySelector('.burger')
const burgerList = document.querySelector('.burger__list')

window.addEventListener('resize', e=>{
    window.innerWidth<505 ? burger.style.display = 'flex': burger.style.display = 'none'
})

burger.addEventListener("click", () => {
    burgerList.classList.toggle("active");
    if (!burgerList.classList.contains("show")) {
        burgerList.classList.remove("hide");
        burgerList.classList.add("show");
    } else {
        burgerList.classList.remove("show");
        burgerList.classList.add("hide");
    }
  });
  