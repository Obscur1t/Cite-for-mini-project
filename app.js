const regBtn = document.querySelector('#register');
const heroName = document.querySelector('#name-id');
const secBtn = document.querySelector('#secBtn')
let userName;

regBtn.addEventListener('click', () => {
    userName = prompt('What is your name');
    heroName.textContent = `Hi, ${userName}`
})

secBtn.addEventListener('click', () => {
    alert(`This button doesn't work right now`)
})








