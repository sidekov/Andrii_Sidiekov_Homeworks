const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');
let todos = []; // массив, в котором хранятся все задачи
todoForm.addEventListener('submit', function(event) { // слушаю события отправки формы
  event.preventDefault(); // не даю странице перезагрузиться
  addTodo(todoInput.value); // вызов функции с текущим значением поля ввода
});

function addTodo(item) { // функция для добавления задачи
  if (item !== '') { // проверка на пустоту элемента
    const todo = { // создаю объект todo, который имеет идентификатор, имя и завершенные свойства
      id: Date.now(),
      name: item,
      completed: false
    };
  
    todos.push(todo); // кидаю в массив todo
    addToLocalStorage(todos); // сохраняю в localStorage
    todoInput.value = ''; // чищу поле ввода
  }
}

function renderTodos(todos) { // вывод задач на экран
// очищаем все внутри <ul> с помощью class=todo-items
  todoItemsList.innerHTML = '';
  todos.forEach(function(item) { // прохожу по каждому элементу внутри todos
    const checked = item.completed ? 'checked': null; // проверка, выполнен ли элемент
// создаю элемент <li> и заполняю его
    const li = document.createElement('li');    // <li> </li>
    li.setAttribute('class', 'item');     // <li class="item"> </li>
    li.setAttribute('data-key', item.id);  // <li class="item" data-key=""> </li>
    /* <li class="item" data-key=""> 
          <input type="checkbox" class="checkbox">
          Вчити JS!!!!!
          <button class="delete-button">X</button>
        </li> */

    if (item.completed === true) { // если элемент выполнен, то добавляю в <li> класс с именем 'checked', который добавит сквозной стиль
      li.classList.add('checked');
    }
li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    todoItemsList.append(li); // добавление  <li> в <ul>
  });
}
function addToLocalStorage(todos) { // добавляю todos в localstorage
  localStorage.setItem('todos', JSON.stringify(todos)); // преобразовую массив в строку и сохраняю
  renderTodos(todos); // вывожу на экран
}
function getFromLocalStorage() { // достаю все из localStorage
  const reference = localStorage.getItem('todos');
  if (reference) { // если ссылка существует
    todos = JSON.parse(reference); // преобразовываю обратно в массив и сохраняю в todos
    renderTodos(todos);
  }
}
function toggle(id) { // переключаю значение на завершенное и не завершенное
  todos.forEach(function(item) {
    if (item.id == id) {
      item.completed = !item.completed; // переключаю значение
    }
  });
addToLocalStorage(todos);
}
function deleteTodo(id) { // удаляю задачу из массива задач, затем обновляю локальное хранилище и отображаю обновленный список на экране
  todos = todos.filter(function(item) { // отфильтровывает <li> с идентификатором и обновляет массив todos
    return item.id != id;
  });
  addToLocalStorage(todos); //  обновляю localStorage
}
getFromLocalStorage(); // изначально получаю все из localStorage
todoItemsList.addEventListener('click', function(event) { // после этого addEventListener <ul> с class=todoItems. Слушаю клик во всех кнопках удаления и флажках.
  if (event.target.type === 'checkbox') { // проверяю стоит ли событие на флажке
    toggle(event.target.parentElement.getAttribute('data-key')); // переключаю состояние
  }
  if (event.target.classList.contains('delete-button')) { // проверяю это ли кнопка удаления
    deleteTodo(event.target.parentElement.getAttribute('data-key')); // получаю идентификатор из значения атрибута ключа данных родительского <li>, где присутствует кнопка удаления
  }
});

localStorage.clear()