const inputForm = document.querySelector('.header');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const taskList = document.querySelector('.tasks-list');
const modalTask = document.querySelector('.modal-task-window');

const TASKS = [];

const createTaskHTML = (taskName, taskDescription) => {
    const taskHTML = document.createElement('div');
    taskHTML.className = 'task-block';

    const task = document.createElement('div');
    task.className = 'task'
    
    const taskNameHTML = document.createElement('h1');
    taskNameHTML.className = 'task-name';
    taskNameHTML.textContent = taskName;

    const taskDescriptionHTML = document.createElement('p');
    taskDescriptionHTML.className = 'task-description';
    taskDescriptionHTML.textContent = taskDescription;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'task-delete_btn';
    deleteBtn.innerHTML = 'Delete'

    task.append(taskNameHTML, taskDescriptionHTML);
    taskHTML.append(task, deleteBtn)
    return taskHTML
}

TASKS.forEach((task) => {
    taskList.append(createTaskHTML(task.name, task.description));
})

const deleteDOMElement = (elem) => {
    if (elem) {
        elem.remove()
    } 
}

const createErrorBlock = (message) => {
    const spanError = document.createElement('span');
    spanError.className = 'error-block';
    spanError.innerText = message;
    return spanError;
}

const closeModalWindow = (taskName, taskDescription) => {
    overlay.style.display = 'none';
    modalWindow.style.display = 'none';
    taskName.value = '';
    taskDescription.value = '';
}

inputForm.addEventListener('click', (event) => {
    const {target} = event;
    const addTaskBtn = target.closest('.add-btn');

    if (addTaskBtn) {
        modalWindow.style.display = 'flex';
        overlay.style.display = 'block';
    }

})

modalWindow.addEventListener('click', (event) => {
    const {target} = event;
    const modalTaskName = document.querySelector('.modal-input_name');
    const modalTaskDescription = document.querySelector('.modal-input_description');
    const modalCloseBtn = target.closest('.modal-btn_close');
    const modalAddBtn = target.closest('.modal-btn_add');
    const spanError = document.querySelector('.error-block')
    const taskFind = TASKS.some((elem) => {
        return elem.name == modalTaskName.value; 
    })
    
    if (modalCloseBtn) {
        closeModalWindow(modalTaskName, modalTaskDescription);
        deleteDOMElement(spanError);
    }

    if (modalAddBtn) {
        if (!modalTaskName.value.trim()) {
            deleteDOMElement(spanError);
            modalWindow.prepend(createErrorBlock('Название задачи не должно быть пустым!'));
        } else if (taskFind) {
            deleteDOMElement(spanError);
            modalWindow.prepend(createErrorBlock('Задача с таким названием уже существует'))
        } else {
            const newTask = {
                name: modalTaskName.value.trim(),
                description: modalTaskDescription.value.trim(),
            }

            TASKS.push(newTask);
            taskList.append(createTaskHTML(newTask.name, newTask.description));
            closeModalWindow(modalTaskName, modalTaskDescription);
            deleteDOMElement(spanError);
        }

    }
})

taskList.addEventListener('click', (event) => {
    const {target} = event;
    const taskBlock = target.closest('.task-block')
    const task = taskBlock.querySelector('.task');
    const taskNameHTML = task.querySelector('.task-name');
    const taskDescriptionHTML = task.querySelector('.task-description');
    const modalTaskTitle = modalTask.querySelector('.modal-task-title')
    const modalTaskDescription = modalTask.querySelector('.modal-task-description');
    const deleteBtn = target.closest('.task-delete_btn')

    if (deleteBtn) {
        deleteDOMElement(taskBlock);
    }


     if (task) {
        modalTask.style.display = 'flex';
        overlay.style.display = 'block';
        modalTaskTitle.textContent = taskNameHTML.textContent;
        modalTaskDescription.textContent = taskDescriptionHTML.textContent
    } 


})

modalTask.addEventListener('click', (event) => {
    const {target} = event;
    const closeBtn = target.closest('.modal-task-close_btn');

    if (closeBtn) {
        overlay.style.display = 'none';
        modalTask.style.display = 'none';
    }

})