const addActionField = document.querySelector('.input-box__add-event');
const addActionBtn = document.querySelector('.input-box__add-btn');
const addBtnIcon = document.querySelector('.input-box__add-btn i');
const todoList = document.querySelector('.todo__list');
const maxItems = 10;
let draggedElement;
let counter = 0;

function count() {
  const message = document.querySelector('.main-box__error');
  if (counter === maxItems) {
    addActionField.disabled = true;
    addActionField.style.cursor = 'not-allowed';
    message.innerHTML = `Maximum item per list are created!`;
  } else {
    message.innerHTML = '';
    addActionField.disabled = false;
    addActionField.style.cursor = 'pointer';
  }
}

function checkOrder(nodeList, first, second) {
  for (let nodeItem of nodeList) {
    if (nodeItem === first) {
      return true;
    } else if (nodeItem === second) {
      return false;
    }
  }
}

function getAction() {
  if (addActionField.value.trim() !== '') {
    addActionBtn.disabled = false;
    addBtnIcon.style.cursor = 'pointer';
  } else {
    addActionBtn.disabled = true;
  }
}

function addAction() {
  counter++;

  const li = document.createElement('li');
  const p = document.createElement('p');
  const iconCheck = document.createElement('i');
  const iconDelete = document.createElement('i');

  iconCheck.classList.add('material-icons', 'checked');
  iconCheck.textContent = 'check_box_outline_blank';
  iconDelete.classList.add('material-icons', 'delete');
  iconDelete.textContent = 'delete';
  li.className = 'todo__list--item';
  li.setAttribute('draggable', 'true');
  p.className = 'todo__list--task';
  p.textContent = addActionField.value;

  li.appendChild(iconCheck);
  li.appendChild(p);
  li.appendChild(iconDelete);
  todoList.appendChild(li);

  addActionField.value = '';
  addActionBtn.disabled = true;
  addBtnIcon.style.cursor = 'not-allowed';

  count();
}

function removeAction(e) {
  if (e.target.classList.contains('delete')) {
    counter--;
    count();
    e.target.parentElement.remove();
  }
}

function actionDone(e) {
  if (e.target.classList.contains('checked')) {
    e.target.textContent = 'done';
    e.target.style.cursor = 'not-allowed';
  }
}

function dragStart(e) {
  e.dataTransfer.setData('application/node type', this);
  draggedElement = e.target;
  draggedElement.className += ' hold';
}

function dragOver(e) {
  e.preventDefault();
  if (draggedElement.classList.contains('todo__list--item')) {
    e.target.classList += ' hovered';
  }
}

function dragLeave(e) {
  draggedElement.classList.remove('hovered', 'hold');
  e.target.classList.remove('hovered');
  e.preventDefault();
}

function dragDrop(e) {
  draggedElement.classList.remove('hold');
  const listItems = document.querySelectorAll('.todo__list--item');
  if (e.target.classList.contains('todo__list--item')) {
    e.target.classList.remove('hovered');
    if (checkOrder(listItems, draggedElement, e.target) !== true) {
      todoList.insertBefore(draggedElement, e.target);
    } else {
      todoList.insertBefore(draggedElement, e.target.nextSibling);
    }
  }
}

function loadListeners() {
  addActionField.addEventListener('keyup', getAction);
  addActionBtn.addEventListener('click', addAction);
  todoList.addEventListener('click', removeAction);
  todoList.addEventListener('click', actionDone);
  todoList.addEventListener('dragstart', dragStart);
  todoList.addEventListener('dragover', dragOver);
  todoList.addEventListener('dragleave', dragLeave);
  todoList.addEventListener('drop', dragDrop);
}

document.addEventListener('DOMContentLoaded', loadListeners);
