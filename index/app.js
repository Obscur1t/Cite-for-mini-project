const regBtn = document.querySelector('#register');
const heroName = document.querySelector('#name-id');
let userName;

regBtn.addEventListener('click', () => {
    userName = prompt('What is your name');
    heroName.textContent = `Hi, ${userName}`
})






