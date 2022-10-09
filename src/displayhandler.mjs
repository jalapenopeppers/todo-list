import { InformationItemManager } from "./informationitemmanager.mjs";
import { format } from "date-fns";

export const DisplayHandler = (() => {
  const projectContainerElem = document.querySelector('.projects-container');

  const displayTodos = (todoCategoryTypeStr, todoSortStr) => {
    let todoItemsTbody = document.querySelector('tbody.todo-items');
    todoItemsTbody.innerHTML = '';

    let todosArray = InformationItemManager.getTodos(todoCategoryTypeStr, todoSortStr);
    for (let todoItem of todosArray) {
      let trElem = document.createElement('tr');
      trElem.className = 'todo-item';

      let tdCheckBoxElem = document.createElement('td');
      let inputCheckBoxElem = document.createElement('input');
      inputCheckBoxElem.setAttribute('type', 'checkbox');
      inputCheckBoxElem.className = 'todo-item-checkbox';
      tdCheckBoxElem.appendChild(inputCheckBoxElem);
      trElem.appendChild(tdCheckBoxElem);

      let tdDueDateElem = document.createElement('td');
      tdDueDateElem.textContent = format(todoItem.dueDate, 'L/d/yy');
      tdDueDateElem.className = 'due-date';
      trElem.appendChild(tdDueDateElem);

      let tdTitleElem = document.createElement('td');
      tdTitleElem.textContent = todoItem.title;
      tdTitleElem.className = 'title';
      trElem.appendChild(tdTitleElem);

      let tdPriorityElem = document.createElement('td');
      let priority = todoItem.priority;
      tdPriorityElem.textContent = priority;
      tdPriorityElem.classList.add('priority');
      if (priority === 'high') {
        tdPriorityElem.classList.add('priority-high');
      } else if (priority === 'med') {
        tdPriorityElem.classList.add('priority-med');
      } else {
        tdPriorityElem.classList.add('priority-low');
      }
      trElem.appendChild(tdPriorityElem);

      let tdCreationDateElem = document.createElement('td');
      tdCreationDateElem.textContent = format(todoItem.creationDate, 'L/d/yy');;
      tdCreationDateElem.classList.add('creation-date');
      trElem.appendChild(tdCreationDateElem);

      todoItemsTbody.appendChild(trElem);
    }
  };
  const displayProjects = () => {
    projectContainerElem.innerHTML = '';
    let projectsArray = InformationItemManager.getProjects();
    console.log(projectsArray);
    for (let projectItem of projectsArray) {
      let projectElem = document.createElement('li');
      projectElem.className = 'button project';
      projectElem.textContent = projectItem.title;
      projectContainerElem.appendChild(projectElem);
    }
  };
  /*
    Attaches event handlers to unchanging buttons like 'all'
    This should only need to be run once.
    */
  const attachStaticEventHandlers = () => {
    let allButton = document.querySelector('.button.all-button');
    allButton.addEventListener('click', (e) => {displayTodos('all', 'due-date-soonest');});
  
    let todayButton = document.querySelector('.button.today-button');
    todayButton.addEventListener('click', (e) => {displayTodos('due-today', 'due-date-soonest');});

    let thisWeekButton = document.querySelector('.button.this-week-button');
    thisWeekButton.addEventListener('click', (e) => {displayTodos('due-this-week', 'due-date-soonest');});

    let importantButton = document.querySelector('.button.important-button');
    importantButton.addEventListener('click', (e) => {displayTodos('high-priority', 'due-date-soonest');});

    let completedButton = document.querySelector('.button.completed-button');
    completedButton.addEventListener('click', (e) => {displayTodos('completed', 'due-date-soonest');});
  }

  return {
    displayTodos,
    displayProjects,
    attachStaticEventHandlers,
  };
})();