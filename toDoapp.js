
const body = document.querySelector('body');
const h1ToDo = document.createElement('h1');
const divForm = document.createElement('div');
const formToDo = document.createElement('form');
const labelToDo = document.createElement('label');
const inputToDo = document.createElement('input');
const btnAdd = document.createElement('input');
const btnClear = document.createElement('input');
const divTask = document.createElement('div');
const paragraph = document.createElement('p');
const spanParag = document.createElement('span')
const divBtns = document.createElement('div');


body.appendChild(h1ToDo);
body.appendChild(divForm);
divForm.appendChild(formToDo);
formToDo.appendChild(labelToDo);
formToDo.appendChild(inputToDo)
formToDo.appendChild(divBtns)
divBtns.appendChild(btnAdd)
divBtns.appendChild(btnClear)
body.appendChild(divTask)
divTask.appendChild(paragraph);
paragraph.appendChild(spanParag);

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

function creaTask(taskValue, array) {
    let newTask = {
        taskText : taskValue
    };
    return array.unshift(newTask);
    
}


console.log(arrayTask);

function deleteTask(taskValue, array) {
    let resultado = array.filter(task => task.taskText !== taskValue);
    
    return resultado
}

arrayTask = deleteTask(taskUser, arrayTask)
console.log(arrayTask);

function clear(array) {
   return array = []
    
}

console.log(clear(arrayTask));