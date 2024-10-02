////////// Cloaks code 

const cloak = document.querySelector('#header-cloak');
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
    // projList.innerHTML = `<a target="_blank" class="project-list-element" href="${url}">${name}</a>`;
    
    projList.insertAdjacentHTML("beforeend",`<a class="project-list-element" href="${url}">${name}</a>`)
}

addProj('Calculator', 'projects/calculator/index.html')
addProj('Timer', 'projects/timer/index.html')




