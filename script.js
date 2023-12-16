const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const register = document.querySelector('.register')
const loginBtn = document.querySelector('.login-btn')
const close = document.querySelector('.close')

register.addEventListener('click', ()=> {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
})

loginBtn.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
})

close.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
})
