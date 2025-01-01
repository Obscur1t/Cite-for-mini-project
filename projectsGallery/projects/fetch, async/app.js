const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const usersListHtml = document.querySelector('.users-list');

async function usersList() {
    try {
        const userResponse = await fetch(USERS_URL);
        const users = userResponse.json();
        return users;
    } catch (error) {
        console.log(error)
    }
}



function userNameListHTML(user) {
    const userHTML = document.createElement('div');
    userHTML.className = 'user-element';

    const userInfo = document.createElement('div');
    userInfo.className = 'user-element-info';

    const userPhoto = document.createElement('img');
    userPhoto.src = 'https://placehold.co/250x280';
    userPhoto.alt = 'user photo';

    const userName = document.createElement('h1');
    userName.className = 'user-element-info_name';
    userName.textContent = user.name;

    const userExtraInfo = document.createElement('div');
    userExtraInfo.className = 'user-element-other-info';

    const userEmail = document.createElement('p');
    userEmail.className = 'user-element-email';
    userEmail.textContent = user.email;

    const userPhone = document.createElement('p');
    userPhone.className = 'user-element-phone';
    userPhone.textContent = user.phone;

    const userCompany = document.createElement('p');
    userCompany.className = 'user-element-company';
    userCompany.textContent = user?.company?.name;

    userExtraInfo.append(userEmail, userPhone, userCompany);
    userInfo.append(userPhoto, userName, userExtraInfo);
    userHTML.append(userInfo);
    return userHTML
}

usersList().then((users) => {
    users.forEach(user => {
        const userHtml = userNameListHTML(user);
        usersListHtml.append(userHtml);
        userHtml.addEventListener('click', (event) => {

            
        })
    });
})

