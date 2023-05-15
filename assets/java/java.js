let btn_menu = document.querySelector('.btn_menu')

let navbar = document.querySelector('.navbar')


btn_menu.addEventListener('click', ()=>{
    navbar.classList.toggle('navbar_ativo')
})