const regBtn = document.querySelector('#register');
const heroName = document.querySelector('#name-id');
const secBtn = document.querySelector('#secBtn')
let userName;

regBtn.addEventListener('click', () => {
    userName = prompt('What is your name');
    heroName.textContent = `Hi, ${userName}`;
})

secBtn.addEventListener('click', () => {
    alert(`This button doesn't work right now`);
})

////////////////////Change theme

const changeBtn = document.querySelector('#sun-btn');
const darkHeader = document.querySelector('#dark-theme-bc-header');
const darkTech = document.querySelector('#tech-id');
const darkProject = document.querySelector('#project-id');
const darkFooter = document.querySelector('#contacts');
const darkLogo = document.querySelector('.logo');
const darkHeaderCl = document.querySelector('#dark-header-cl');


changeBtn.addEventListener('click', () => {
    darkHeader.classList.toggle('light-bc-header');
    darkTech.classList.toggle('light-bc-tech');
    darkProject.classList.toggle('light-bc-project');
    darkFooter.classList.toggle('light-bc-footer');
    changeBtn.classList.toggle('light-changeBtn');
    darkLogo.classList.toggle('light-header-logo');
    darkHeaderCl.classList.toggle('light-header-cl');
    changeBtn.classList.toggle('light-change-btn');
    regBtn.classList.toggle('light-btn');
    secBtn.classList.toggle('light-btn')
})

console.log('Hi');







