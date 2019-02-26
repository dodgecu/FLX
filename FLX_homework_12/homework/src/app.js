class Storage {
  setLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    const doneItems = tasks.filter(item => item.isDone === true);
    const itemsUndone = tasks.filter(item => item.isDone === false);
    const filteredList = [...itemsUndone, ...doneItems];

    localStorage.setItem('tasks', JSON.stringify(filteredList));
  }

  persistTask() {
    const listData = {
      id: new Date().getTime().toString(),
      title: this.input.value,
      isDone: false
    };

    this.setLocalStorage(listData);
  }

  pullFromStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  removeFromLS(current) {
    const storage = this.pullFromStorage();
    storage.forEach((_, i) => {
      if (storage[i].id === current.parentNode.dataset.id) {
        storage.splice(i, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(storage));
  }

  markAsDone(current) {
    const storage = this.pullFromStorage();
    const tempItem = [];
    storage.forEach((item, i) => {
      if (item.id === current.parentNode.dataset.id) {
        item.isDone = true;
        tempItem.push(storage.splice(i, 1));
      }
    });
    const updatedList = [...storage, ...tempItem].reduce(
      (a, b) => a.concat(b),
      []
    );

    localStorage.setItem('tasks', JSON.stringify(updatedList));
  }

  modify(taskId, newTitle) {
    const storage = this.pullFromStorage();
    storage.forEach(item => {
      if (item.id === taskId) {
        item.title = newTitle;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(storage));
  }
}

class Template extends Storage {
  constructor(renderInto) {
    super();
    this.root = renderInto;
    this.main = document.createElement('main');
    this.div = document.createElement('div');
    this.div.className = 'btns-update';
    this.title = document.createElement('h1');
    this.list = document.createElement('ul');
    this.list.className = 'task-list';
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'text');
    this.button = type => {
      const btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      switch (type) {
        case 'Primary':
          btn.className = 'add-task';
          btn.textContent = `Add New Task`;
          break;
        case 'Cancel':
          btn.className = 'btns-update__cancel-task';
          btn.textContent = `Cancel`;
          break;
        case 'Save':
          btn.className = 'btns-update__modify-task';
          btn.textContent = `Save changes`;
          break;
        default:
          btn.className = '';
          btn.textContent = '';
      }

      return btn;
    };
  }

  defaultTemplate() {
    const storage = this.pullFromStorage();
    const zero = 0;
    if (storage.length <= zero) {
      this.list.innerHTML = `<li><p>TODO is empty</p></li>`;
    } else {
      this.list.innerHTML = '';
      for (let task of storage) {
        const li = document.createElement('li');
        const lastItem = document.querySelector('li[data-done = ' / true / ']');
        li.className = 'task-list__item';
        li.setAttribute('data-id', task.id);
        li.setAttribute('data-done', task.isDone);
        li.innerHTML = `<span class='done'></span>${
          task.title
          }<span class='remove'></span></li>`;
        this.list.insertBefore(li, lastItem);
      }
    }
    this.main.append(this.title, this.button('Primary'), this.list, this.div);
    this.root.appendChild(this.main);
  }

  addTask() {
    this.persistTask();
    this.input.value = '';
  }

  deleteTask(task) {
    this.removeFromLS(task);
    task.parentNode.remove();
  }

  isDone(task) {
    this.markAsDone(task);
    task.innerHTML = `&#10007;`;
    task.parentNode.setAttribute('data-done', 'true');
    const taskList = document.querySelectorAll('.task-list__item');
    this.list.insertBefore(
      task.parentNode,
      taskList[taskList.length - 1].nextSibling
    );
  }

  edit(id) {
    this.modify(id, this.input.value);
  }

  loadEventListeners() {
    let task;

    document.querySelector('#root').addEventListener('click', e => {
      if (e.target.className === 'btns-update__modify-task') {
        if (this.input.value.trim() !== '') {
          if (window.location.hash === '#/add') {
            this.addTask();
          } else {
            this.edit(task);
          }
          window.location.hash = '';
        }
      }
    });

    document.querySelector('#root').addEventListener('click', e => {
      if (e.target.getAttribute('data-done') === 'false') {
        const id = e.target.getAttribute('data-id');
        window.location.hash = `/modify/item_${id}`;
        this.input.value = e.target.textContent;
        task = e.target.getAttribute('data-id');
      }
    });

    document.querySelector('#root').addEventListener('click', e => {
      if (e.target.className === 'add-task') {
        window.location.hash = '/add';
      }
    });

    document.querySelector('#root').addEventListener('click', e => {
      if (e.target.className === 'btns-update__cancel-task') {
        window.location.hash = '';
      }
    });

    document.querySelector('#root').addEventListener('click', e => {
      if (e.target.className === 'remove') {
        template.deleteTask(e.target);
      }
    });

    document.querySelector('#root').addEventListener('click', e => {
      if (e.target.className === 'done') {
        template.isDone(e.target);
      }
    });
  }

  render() {
    this.main.innerHTML = '';
    this.div.innerHTML = '';
    const id = window.location.hash.split('_').pop();
    if (window.location.hash === `#/add`) {
      this.title.textContent = 'Add Task';
      this.main.append(this.title, this.input, this.div);
      this.div.append(this.button('Cancel'), this.button('Save'));
    } else if (window.location.hash === `#/modify/item_${id}`) {
      this.title.textContent = 'Modify Task';
      this.main.append(this.title, this.input, this.div);
      this.div.append(this.button('Cancel'), this.button('Save'));
    } else if (window.location.hash === '') {
      this.title.textContent = 'Simple TODO Application';
      this.defaultTemplate();
    } else {
      this.root.innerHTML = `<h1 class='not_found'>404 NOT FOUND</h1>`;
    }
  }
}

const template = new Template(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  template.loadEventListeners(), template.render();
});
window.addEventListener('hashchange', () => template.render());
