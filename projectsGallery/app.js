////////// Cloaks code 

const cloak = document.querySelector('#header-cloaks');
const cloakPar = document.querySelector('#header-cloaks-p');

function update() {
    let time = new Date;
    let localHours = time.getHours() ;
    let localMinutes = time.getMinutes();
    let localSeconds = time.getSeconds();
    cloakPar.textContent = localHours + ' : ' + localMinutes + ' : ' + localSeconds;
}

update()

const cloakInt = setInterval(() => {
    let time = new Date;
    let localHours = time.getHours() ;
    let localMinutes = time.getMinutes();
    let localSeconds = time.getSeconds();
    cloakPar.textContent = localHours + ' : ' + localMinutes + ' : ' + localSeconds;
}, 1000)

////////////// Function for add projects

const projList = document.querySelector('#project-list');

function addProj(name, url) {
    projList.insertAdjacentHTML("beforeend",`<a id="project-link" class="project-list-element" href="${url}">${name}</a>`)
}

addProj('Calculator', 'projects/calculator/index.html')
addProj('Timer', 'projects/timer/index.html')
addProj('Cosmos(blur)', 'projects/cosmosWithBlur/index.html')
addProj('Users list(basic fetch)', 'projects/fetch, async/index.html')


////////////// Add light theme

const lightBody = document.querySelector('body');
const lightHeader = document.querySelector('#header');
const headerLogo = document.querySelector('#header-logo');
const changeThemeBtn = document.querySelector('#sun-btn');
const projectLink = document.querySelectorAll('.project-list-element');

changeThemeBtn.addEventListener('click', () => {
    lightBody.classList.toggle('light-body');
    lightHeader.classList.toggle('light-header');
    headerLogo.classList.toggle('light-header-logo');
    changeThemeBtn.classList.toggle('light-sun-btn');
    cloak.classList.toggle('light-cloak')
    cloakPar.classList.toggle('light-cloak-p')

    projectLink.forEach((el) => {
        el.classList.toggle('light-link')
    }) 


})




console.log(active);


