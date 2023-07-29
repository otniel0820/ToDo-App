
const body = document.querySelector('body');
const h1ToDo = document.createElement('h1');
const divForm = document.createElement('div');
const formToDo = document.createElement('form');
const labelToDo = document.createElement('label');
const inputToDo = document.createElement('input');
const btnAdd = document.createElement('input');
const btnClear = document.createElement('input');
const divTask = document.createElement('div');
const divBtns = document.createElement('div');
const listTask = document.createElement('ul');



body.appendChild(h1ToDo);
body.appendChild(divForm);
divForm.appendChild(formToDo);
formToDo.appendChild(labelToDo);
formToDo.appendChild(inputToDo)
formToDo.appendChild(divBtns)
divBtns.appendChild(btnAdd)
divBtns.appendChild(btnClear)
body.appendChild(divTask)
divTask.appendChild(listTask)


body.style.backgroundColor = 'aqua'
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
h1ToDo.innerText = 'ToDo-App';
divForm.style.backgroundColor = 'lightblue'
divForm.style.border = '2px solid black'
divForm.style.padding = '2em 15em 2em 15em'
labelToDo.innerText = 'Type a new To-do:';
inputToDo.type = 'text'
formToDo.style.display = 'flex';
formToDo.style.flexDirection = 'column'
formToDo.style.alignItems = 'center'
formToDo.style.gap = '1.5em';
divBtns.style.display = 'flex';
divBtns.style.gap = '1em'
btnAdd.type = 'button'
btnAdd.value = 'Add';
btnClear.value = 'Clear';
btnClear.type = 'button'


let arrayTask = []

function createTask(taskValue, array) {
    let idTask = array.length
    let newTask = {
        id: idTask,
        taskText: taskValue
    };
    const itemList = document.createElement('li');
    const spanList = document.createElement('span');
    const btnDelete = document.createElement('input');
    btnDelete.type = 'button';
    btnDelete.value = 'Delete';
    itemList.innerText = newTask.taskText;
    itemList.appendChild(spanList)
    spanList.appendChild(btnDelete);
    listTask.insertBefore(itemList, listTask.firstChild)
    
    return array.unshift(newTask);

}
btnAdd.addEventListener('click', () => {
    createTask(inputToDo.value, arrayTask)
})


function deleteTask(taskValue, array) {
    let resultado = array.filter(task => task.taskText !== taskValue);

    return resultado
}
btnDelete.addEventListener('click', () => {
    deleteTask()
})

function clear(array) {
    return array = []

}

console.log(clear(arrayTask));