let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');

if (registerLink){
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
}

if (loginLink){
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
}