import { InformationItemManager } from "./informationitemmanager.mjs";
import { format } from "date-fns";
import { TodoItem, ProjectItem } from "./objects.mjs"; 
import EditIcon from './icons/pencil-outline.svg'
import DeleteIcon from './icons/trash-can-outline.svg'

export const DisplayHandler = (() => {
  const _projectContainerElem = document.querySelector('.projects-container');
  const _updateCurrentCategory = (event) => {
    let currentCategory = document.querySelector('div.current-category-text');
    currentCategory.textContent = event.target.textContent;
  };
  const _autofillProjectInfo = (projID) => {
    let projectObj = InformationItemManager.getProject(projID);
    let projTitle = document.querySelector('form.create-edit-form input#title');
    projTitle.value = projectObj.title;
    let projDescription = document.querySelector('form.create-edit-form input#description');
    projDescription.value = projectObj.description;
    let projDueDate = document.querySelector('form.create-edit-form input#due-date');
    projDueDate.value = projectObj.dueDate;
    let projPriority = document.querySelector('form.create-edit-form select#priority');
    projPriority.value = projectObj.priority;
    let projNotes = document.querySelector('form.create-edit-form textarea#notes');
    projNotes.value = projectObj.notes;
    let projCompleted = document.querySelector('form.create-edit-form input#completed');
    projCompleted.checked = projectObj.completed;
  };
  const _displayForm = (formStr, projID = '') => {
    let formPlacementGrid = document.querySelector('div.create-edit-form-placement-grid');
    let createEditForm = document.querySelector('form.create-edit-form');
    let moveTodoForm = document.querySelector('form.move-todo-form');
    if (formStr === 'create project form') {
      formPlacementGrid.style.display = 'grid';
      createEditForm.style.display = 'grid';
      moveTodoForm.style.display = 'none';
      let createEditFormTitle = document.querySelector('form.create-edit-form>legend.form-title');
      createEditFormTitle.textContent = 'Create Project';
      let requiredProjTitleInput = document.querySelector('form.create-edit-form input#title');
      requiredProjTitleInput.required = true;
      let submitFormButton = document.querySelector('form.create-edit-form button.submit-form-button');
      submitFormButton.textContent = 'Create';
      submitFormButton.dataset.submittype = 'create';
      submitFormButton.dataset.editprojid = '';
    } else if (formStr === 'edit project form' && projID !== '') {
      formPlacementGrid.style.display = 'grid';
      createEditForm.style.display = 'grid';
      moveTodoForm.style.display = 'none';
      let createEditFormTitle = document.querySelector('form.create-edit-form>legend.form-title');
      createEditFormTitle.textContent = 'Edit Project';
      let requiredProjTitleInput = document.querySelector('form.create-edit-form input#title');
      requiredProjTitleInput.required = true;
      /* autofill with project info */
      _autofillProjectInfo(projID);
      let submitFormButton = document.querySelector('form.create-edit-form button.submit-form-button');
      submitFormButton.textContent = 'Edit';
      submitFormButton.dataset.submittype = 'edit';
      submitFormButton.dataset.editprojid = projID; // For use by submit button event handler
    } else if (formStr === 'move todo form') {
      formPlacementGrid.style.display = 'grid';
      createEditForm.style.display = 'none';
      moveTodoForm.style.display = 'grid';
    } else if (formStr === 'none') {
      let requiredProjTitleInput = document.querySelector('form.create-edit-form input#title');
      requiredProjTitleInput.required = false; // Doing this avoids a browser error when it tries to validate a hidden element
      formPlacementGrid.style.display = 'none';
    }
  };

  const displayProjects = () => {
    _projectContainerElem.innerHTML = '';
    let projectsArray = InformationItemManager.getProjects();
    console.log(projectsArray);
    for (let projectItem of projectsArray) {
      let projectElem = document.createElement('li');
      projectElem.className = 'button project';
      projectElem.textContent = projectItem.title;
      _projectContainerElem.appendChild(projectElem);
    }
  };
  const createProject = (projectItemObj) => {
    let projectsContainerElem = document.querySelector('ul.projects-container');
    let projectLiElem = document.createElement('li');
    projectLiElem.className = 'project';
    projectLiElem.id = projectItemObj.projID;
    projectLiElem.dataset.projid = projectItemObj.projID;
    let checkedStr = projectItemObj.completed === true ? ' checked' : '';
    if (checkedStr) {projectLiElem.classList.add('completed')};
    projectLiElem.innerHTML = `
      <div class="button project-text">${projectItemObj.title}</div>
      <div class="project-subbuttons">
        <div class="complete-project-button">
          <input type="checkbox" class="complete-project-button"${checkedStr}>
        </div>
        <div class="edit-project-button">
          <img class="edit-project-button-icon" src="${EditIcon}" alt="Edit project button">
        </div>
        <div class="delete-project-button">
          <img class="delete-project-button-icon" src="${DeleteIcon}" alt="Delete project button">
        </div>
      </div>
    `;

    // Append item to DOM, evaluates innerHTML to objects
    let appendChildPromise = new Promise((onSuccess) => {
      projectsContainerElem.appendChild(projectLiElem);

      onSuccess(); // dummy function - does nothing
    });

    appendChildPromise.then(() => {
      let completeProjectButton = document.querySelector(`li#${projectItemObj.projID} input.complete-project-button`);
      completeProjectButton.addEventListener('click', (e) => {
        let projID = e.currentTarget.parentNode.parentNode.parentNode.dataset.projid;
        let projectObject = InformationItemManager.getProject(projID);
        projectObject.completed = e.currentTarget.checked;
        if (projectObject.completed) {
          e.currentTarget.parentNode.parentNode.parentNode.classList.add('completed');
        } else {
          e.currentTarget.parentNode.parentNode.parentNode.classList.remove('completed');
        }
      });
      let editProjectButton = document.querySelector(`li#${projectItemObj.projID} div.edit-project-button`);
      editProjectButton.addEventListener('click', (e) => {
        let projID = e.currentTarget.parentNode.parentNode.dataset.projid;
        _displayForm('edit project form', projID);
      });
      let deleteProjectButton = document.querySelector(`li#${projectItemObj.projID} div.delete-project-button`);
      deleteProjectButton.addEventListener('click', (e) => {
        let projID = e.currentTarget.parentNode.parentNode.dataset.projid;
        deleteProject(projID);
        console.log(InformationItemManager.getProjects());
      });
    });
  };
  const deleteProject = (projID) => {
    document.querySelector(`li#${projID}`).remove(); // Remove project from DOM
    InformationItemManager.deleteProject(projID); // Remove project from projects map
  };
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
  /*
    Attaches event handlers to unchanging buttons like 'all'
    This should only need to be run once.
    */
  const attachStaticEventHandlers = () => {
    let allButton = document.querySelector('.button.all-button');
    allButton.addEventListener('click', (e) => {displayTodos('all', 'due-date-soonest');});
    allButton.addEventListener('click', (e) => {_updateCurrentCategory(e)});
  
    let todayButton = document.querySelector('.button.today-button');
    todayButton.addEventListener('click', (e) => {displayTodos('due-today', 'due-date-soonest');});
    todayButton.addEventListener('click', (e) => {_updateCurrentCategory(e)});

    let thisWeekButton = document.querySelector('.button.this-week-button');
    thisWeekButton.addEventListener('click', (e) => {displayTodos('due-this-week', 'due-date-soonest');});
    thisWeekButton.addEventListener('click', (e) => {_updateCurrentCategory(e)});

    let importantButton = document.querySelector('.button.important-button');
    importantButton.addEventListener('click', (e) => {displayTodos('high-priority', 'due-date-soonest');});
    importantButton.addEventListener('click', (e) => {_updateCurrentCategory(e)});

    let completedButton = document.querySelector('.button.completed-button');
    completedButton.addEventListener('click', (e) => {displayTodos('completed', 'due-date-soonest');});
    completedButton.addEventListener('click', (e) => {_updateCurrentCategory(e)});

    let addProjectButton = document.querySelector('div.projects-header>div.add-project-button');
    addProjectButton.addEventListener('click', (e) => {_displayForm('create project form')});

    let createEditFormCancelButton = document.querySelector('form.create-edit-form button.cancel-form-button');
    createEditFormCancelButton.addEventListener('click', (e) => {
      _displayForm('none');
      let createEditForm = document.querySelector('form.create-edit-form');
      createEditForm.reset(); // resets form to default values
    });
    let createEditFormSubmitButton = document.querySelector('form.create-edit-form button.submit-form-button');
    createEditFormSubmitButton.addEventListener('click', (e) => {
      _displayForm('none');
      let projTitle = document.querySelector('form.create-edit-form input#title').value;
      let projDescription = document.querySelector('form.create-edit-form input#description').value;
      let projDueDate = document.querySelector('form.create-edit-form input#due-date').value;
      let projPriority = document.querySelector('form.create-edit-form select#priority').value;
      let projNotes = document.querySelector('form.create-edit-form textarea#notes').value;
      let projCompleted = document.querySelector('form.create-edit-form input#completed').checked;
      if (createEditFormSubmitButton.dataset.submittype === 'create') {
        let projItemObj = new ProjectItem({
          title:projTitle,
          description:projDescription,
          dueDate:projDueDate,
          priority:projPriority,
          notes:projNotes,
          completed:projCompleted,
        });
        /* CAUTION: Editing newProjItemObj after next line will edit its actual value in the projectMap */
        let newProjItemObj = InformationItemManager.createProject(projItemObj);
        createProject(newProjItemObj);
      } else if (createEditFormSubmitButton.dataset.submittype === 'edit') {
        let projID = e.currentTarget.dataset.editprojid;
        let existingProjItemObj = InformationItemManager.getProject(projID);
        existingProjItemObj.title = projTitle;
        existingProjItemObj.description = projDescription;
        existingProjItemObj.dueDate = projDueDate;
        existingProjItemObj.priority = projPriority;
        existingProjItemObj.notes = projNotes;
        existingProjItemObj.completed = projCompleted;
        if (projCompleted) {
          let projectLiElem = document.querySelector(`li#${projID}.project`);
          projectLiElem.classList.add('completed');
          let projectCompletedCheckbox = document.querySelector(`li#${projID}.project input.complete-project-button`);
          projectCompletedCheckbox.checked = true;
        } else {
          let projectLiElem = document.querySelector(`li#${projID}.project`);
          projectLiElem.classList.remove('completed');
          let projectCompletedCheckbox = document.querySelector(`li#${projID}.project input.complete-project-button`);
          projectCompletedCheckbox.checked = false;
        }
      }
      
      let createEditForm = document.querySelector('form.create-edit-form');
      createEditForm.reset(); // resets form to default values
    });

    let moveTodoFormCancelButton = document.querySelector('form.move-todo-form button.cancel-form-button');
    moveTodoFormCancelButton.addEventListener('click', (e) => {
      _displayForm('none');
      let moveTodoForm = document.querySelector('form.move-todo-form');
      moveTodoForm.reset(); // resets form to default values
    });
  }

  return {
    displayTodos,
    displayProjects,
    attachStaticEventHandlers,
  };
})();