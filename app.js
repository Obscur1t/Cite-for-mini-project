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
let active = false
const changeBtn = document.querySelector('#sun-btn');
const darkHeader = document.querySelector('#dark-theme-bc-header');
const darkTech = document.querySelector('#tech-id');
const darkProject = document.querySelector('#project-id');
const darkFooter = document.querySelector('#contacts');
const darkLogo = document.querySelector('.logo');
const darkHeaderCl = document.querySelector('#dark-header-cl');
const htmlImg = document.querySelector('#html-img');
const cssImg = document.querySelector('#css-img');
const jsImg = document.querySelector('#js-img');
const reactImg = document.querySelector('#react-img');
const techTitle = document.querySelector('#tech-title');
const projectTitle = document.querySelector('#project-title');
const projectLink = document.querySelector('#project-link');
const projectPar = document.querySelector('#project-p');



changeBtn.addEventListener('click', () => {
    if(active == false) {
        active = true
    } else {
        active = false
    }

    darkHeader.classList.toggle('light-bc-header');
    darkTech.classList.toggle('light-bc-tech');
    darkProject.classList.toggle('light-bc-project');
    darkFooter.classList.toggle('light-bc-footer');
    changeBtn.classList.toggle('light-changeBtn');
    darkLogo.classList.toggle('light-header-logo');
    darkHeaderCl.classList.toggle('light-header-cl');
    changeBtn.classList.toggle('light-change-btn');
    changeBtn.classList.toggle('active');
    regBtn.classList.toggle('light-btn');
    secBtn.classList.toggle('light-btn')
    htmlImg.classList.toggle('light-tech-img'); 
    cssImg.classList.toggle('light-tech-img'); 
    jsImg.classList.toggle('light-tech-img'); 
    reactImg.classList.toggle('light-tech-img');
    techTitle.classList.toggle('light-tech-title');
    projectTitle.classList.toggle('light-project-title');
    projectLink.classList.toggle('light-project-link');
    projectPar.classList.toggle('light-project-p');
    
    console.log(active);
    
})











