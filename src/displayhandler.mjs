import { InformationItemManager } from "./informationitemmanager.mjs";
import { format } from 'date-fns';
import { TodoItem, ProjectItem } from "./objects.mjs"; 
import EditIcon from './icons/pencil-outline.svg'
import DeleteIcon from './icons/trash-can-outline.svg'
import MoveIcon from './icons/folder-move-outline.svg';

export const DisplayHandler = (() => {
  const _projectContainerElem = document.querySelector('.projects-container');
  const _updateCurrentCategory = (event) => {
    let currentCategory = document.querySelector('div.current-category-text');
    currentCategory.textContent = event.currentTarget.textContent;
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
  const _autofillTodoInfo = (todoID) => {
    let todoObj = InformationItemManager.getTodo(todoID);
    let todoTitle = document.querySelector('form.create-edit-form input#title');
    todoTitle.value = todoObj.title;
    let todoDescription = document.querySelector('form.create-edit-form input#description');
    todoDescription.value = todoObj.description;
    let todoDueDate = document.querySelector('form.create-edit-form input#due-date');
    console.log(todoObj.dueDate.toString());
    todoDueDate.value = format(todoObj.dueDate, 'yyyy-MM-dd') + 'T' + format(todoObj.dueDate, 'HH:mm');
    let todoPriority = document.querySelector('form.create-edit-form select#priority');
    todoPriority.value = todoObj.priority;
    let todoNotes = document.querySelector('form.create-edit-form textarea#notes');
    todoNotes.value = todoObj.notes;
    let todoCompleted = document.querySelector('form.create-edit-form input#completed');
    todoCompleted.checked = todoObj.completed;
  };
  const _configureForm = ({
    formStr, 
    formTitleText = 'Title not set', 
    submitButtonText = '', 
    submitButtonSubmitType = ''} = {}) => {
    //_displayForm({formStr:formStr, });
    //DETERMINE IF THIS FUNCTION IS NEEDED
  };
  const _displayForm = ({formStr, projID = '', todoID = ''} = {}) => {
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
      submitFormButton.dataset.submittype = 'create-project';
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
      submitFormButton.dataset.submittype = 'edit-project';
      submitFormButton.dataset.editprojid = projID; // For use by submit button event handler
    } else if (formStr === 'create todo form') {
      //Check if a project is selected. If not, tell the user to pick a project
      if (projID === '') {
        // Error, don't bring up form
        return;
      }
      formPlacementGrid.style.display = 'grid';
      createEditForm.style.display = 'grid';
      moveTodoForm.style.display = 'none';
      let createEditFormTitle = document.querySelector('form.create-edit-form>legend.form-title');
      createEditFormTitle.textContent = 'Create Todo';
      let requiredTodoTitleInput = document.querySelector('form.create-edit-form input#title');
      requiredTodoTitleInput.required = true;
      let requiredDueDateInput = document.querySelector('form.create-edit-form input#due-date');
      requiredDueDateInput.required = true;
      let submitFormButton = document.querySelector('form.create-edit-form button.submit-form-button');
      submitFormButton.textContent = 'Create';
      submitFormButton.dataset.submittype = 'create-todo';
      submitFormButton.dataset.editprojid = projID;
      submitFormButton.dataset.edittodoid = '';
    } else if (formStr === 'edit todo form' && todoID !== '') {
      formPlacementGrid.style.display = 'grid';
      createEditForm.style.display = 'grid';
      moveTodoForm.style.display = 'none';
      let createEditFormTitle = document.querySelector('form.create-edit-form>legend.form-title');
      createEditFormTitle.textContent = 'Edit Todo';
      let requiredTodoTitleInput = document.querySelector('form.create-edit-form input#title');
      requiredTodoTitleInput.required = true;
      let submitFormButton = document.querySelector('form.create-edit-form button.submit-form-button');
      submitFormButton.textContent = 'Edit';
      submitFormButton.dataset.submittype = 'edit-todo';
      submitFormButton.dataset.editprojid = projID;
      submitFormButton.dataset.edittodoid = todoID;
    } else if (formStr === 'move todo form') {
      formPlacementGrid.style.display = 'grid';
      createEditForm.style.display = 'none';
      moveTodoForm.style.display = 'grid';
      console.log(`TodoID: ${todoID}`);
      let todoItem = InformationItemManager.getTodo(todoID);
      let submitButton = document.querySelector('form.move-todo-form button.submit-form-button');
      submitButton.dataset.sourcetodoid = todoID;
      let parentProjectItem = InformationItemManager.getProject(projID);
      let moveTodoTitle  = document.querySelector('.todo-preview>.todo-preview-title');
      moveTodoTitle.textContent = `Title: ${todoItem.title}`;
      let moveTodoDueDate = document.querySelector('.todo-preview>.todo-preview-due-date');
      moveTodoDueDate.textContent = `Due: ${format(todoItem.dueDate, 'L/d/yy')}`;
      let fromProjectTitle = document.querySelector('.move-todo-from-project');
      fromProjectTitle.textContent = parentProjectItem.title;
      let projectsArray = InformationItemManager.getProjects();
      let selectElem = document.querySelector('select.move-todo-projects');
      selectElem.innerHTML = ''; // Clear previous options
      for (let project of projectsArray) {
        if (project.projID !== parentProjectItem.projID) {
          let optionElem = document.createElement('option');
          optionElem.setAttribute('value', project.projID);
          optionElem.textContent = project.title;
          selectElem.appendChild(optionElem);
        }
      }
    } else if (formStr === 'none') {
      let requiredProjTitleInput = document.querySelector('form.create-edit-form input#title');
      requiredProjTitleInput.required = false; // Doing this avoids a browser error when it tries to validate a hidden element
      let requiredDueDateInput = document.querySelector('form.create-edit-form input#due-date');
      requiredDueDateInput.required = false;
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
      let projectTitleButton = document.querySelector(`li#${projectItemObj.projID} div.button.project-text`);
      projectTitleButton.addEventListener('click', (e) => {
        displayTodos(projectItemObj.projID, 'due-date-soonest');
        _updateCurrentCategory(e);
        document.querySelector('div.main-content-top-row>div.add-todo-button').style.display = 'block';
      });
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
        _displayForm({formStr:'edit project form', projID:projID});
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
    let addTodoButton = document.querySelector('div.main-content div.add-todo-button');
    if (todoCategoryTypeStr.includes('proj')) {
      // todoCategoryTypeStr is a projID, so attach it to addTodoButton for reference by other elements
      addTodoButton.dataset.parentprojid = todoCategoryTypeStr;
    } else {
      addTodoButton.dataset.parentprojid = '';
    }
    
    let todoItemsTbody = document.querySelector('tbody.todo-items');
    todoItemsTbody.innerHTML = '';

    let todosArray = InformationItemManager.getTodos(todoCategoryTypeStr, todoSortStr);
    let noTodosElem = document.querySelector('div.no-todos-message');
    if (todosArray.length === 0 && noTodosElem === null) {
      console.log(noTodosElem);
      let noTodosText = document.createElement('div');
      noTodosText.textContent = `You don't have any todos here yet!`;
      noTodosText.className = 'no-todos-message';
      let secondLine = document.createElement('div');
      secondLine.textContent = `If you don't have a project yet, make one on the sidebar.`;
      noTodosText.appendChild(secondLine);
      let thirdLine = document.createElement('div');
      thirdLine.textContent = `If you have a project already, add some todos using the button above!`;
      noTodosText.appendChild(thirdLine);
      let mainContent = document.querySelector('div.main-content');
      mainContent.appendChild(noTodosText);
    } else if (todosArray.length !== 0 && noTodosElem !== null) {
      noTodosElem.remove();
    }
    for (let todoItem of todosArray) {
      let trElem = document.createElement('tr');
      trElem.className = 'todo-item';
      trElem.dataset.todoid = todoItem.todoID;
      trElem.addEventListener('click', (e) => {
        console.log('edit todo activated');
        _displayForm({formStr:'edit todo form',projID:todoItem.parentProjID,todoID:todoItem.todoID});
        _autofillTodoInfo(todoItem.todoID);
      });

      let tdCheckBoxElem = document.createElement('td');
      let inputCheckBoxElem = document.createElement('input');
      inputCheckBoxElem.setAttribute('type', 'checkbox');
      inputCheckBoxElem.className = 'todo-item-checkbox';
      if (todoItem.completed === true) {
        inputCheckBoxElem.checked = true;
        trElem.classList.add('completed');
      }
      inputCheckBoxElem.addEventListener('click', (e) => {
        let todoID = e.currentTarget.parentNode.parentNode.dataset.todoid;
        let todoItem = InformationItemManager.getTodo(todoID);
        if (e.currentTarget.parentNode.parentNode.classList.toggle('completed')) {
          // Todo is completed, update internally
          todoItem.completed = true;
        } else {
          // Todo is NOT completed, update internally
          todoItem.completed = false;
        }
        e.stopPropagation();
      });
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

      let tdMoveButtonElem = document.createElement('td');
      tdMoveButtonElem.classList.add('todo-item-move-button');
      tdMoveButtonElem.innerHTML = `
        <img class="todo-item-move-button-icon" src="${MoveIcon}" alt="Move todo button">
      `;
      tdMoveButtonElem.addEventListener('click', (e) => {
        _displayForm({
          formStr:'move todo form',
          projID:todoItem.parentProjID,
          todoID:e.currentTarget.parentNode.dataset.todoid
        });
        e.stopPropagation();
      });
      trElem.appendChild(tdMoveButtonElem);

      let tdDeleteButtonElem = document.createElement('td');
      tdDeleteButtonElem.classList.add('todo-item-delete-button');
      tdDeleteButtonElem.innerHTML = `
        <img class="todo-item-delete-button-icon" src="${DeleteIcon}" alt="Delete todo button">
      `;
      tdDeleteButtonElem.addEventListener('click', (e) => {
        let todoID = e.currentTarget.parentNode.dataset.todoid;
        InformationItemManager.deleteTodo(todoID); // Delete from projectMap
        e.stopPropagation();
        e.currentTarget.parentNode.remove();
      });
      trElem.appendChild(tdDeleteButtonElem);

      todoItemsTbody.appendChild(trElem);
    }
  };
  /*
    Attaches event handlers to unchanging buttons like 'all'
    This should only need to be run once.
    */
  const attachStaticEventHandlers = () => {
    let allButton = document.querySelector('.button.all-button');
    allButton.addEventListener('click', (e) => {
      displayTodos('all', 'due-date-soonest');
      _updateCurrentCategory(e)
      document.querySelector('div.main-content-top-row>div.add-todo-button').style.display = 'none';
    });
  
    let todayButton = document.querySelector('.button.today-button');
    todayButton.addEventListener('click', (e) => {
      displayTodos('due-today', 'due-date-soonest');
      _updateCurrentCategory(e)
      document.querySelector('div.main-content-top-row>div.add-todo-button').style.display = 'none';
    });

    let thisWeekButton = document.querySelector('.button.this-week-button');
    thisWeekButton.addEventListener('click', (e) => {
      displayTodos('due-this-week', 'due-date-soonest');
      _updateCurrentCategory(e)
      document.querySelector('div.main-content-top-row>div.add-todo-button').style.display = 'none';
    });

    let importantButton = document.querySelector('.button.important-button');
    importantButton.addEventListener('click', (e) => {
      displayTodos('high-priority', 'due-date-soonest');
      _updateCurrentCategory(e)
      document.querySelector('div.main-content-top-row>div.add-todo-button').style.display = 'none';
    });

    let completedButton = document.querySelector('.button.completed-button');
    completedButton.addEventListener('click', (e) => {
      displayTodos('completed', 'due-date-soonest');
      _updateCurrentCategory(e)
      document.querySelector('div.main-content-top-row>div.add-todo-button').style.display = 'none';
    });

    let addProjectButton = document.querySelector('div.projects-header>div.add-project-button');
    addProjectButton.addEventListener('click', (e) => {_displayForm({formStr:'create project form'})});

    let addTodoButton = document.querySelector('div.main-content-top-row>div.add-todo-button');
    addTodoButton.addEventListener('click', (e) => {
      _displayForm({
        formStr:'create todo form',
        projID: e.currentTarget.dataset.parentprojid,
      });
    });

    let createEditFormCancelButton = document.querySelector('form.create-edit-form button.cancel-form-button');
    createEditFormCancelButton.addEventListener('click', (e) => {
      let createEditForm = document.querySelector('form.create-edit-form');
      createEditForm.reset(); // resets form to default values
      _displayForm({formStr:'none'});
    });
    let createEditFormSubmitButton = document.querySelector('form.create-edit-form button.submit-form-button');
    createEditFormSubmitButton.addEventListener('click', (e) => {
      let projTitleElem = document.querySelector('form.create-edit-form input#title');
      let projTitle = projTitleElem.value;
      let projDueDateElem = document.querySelector('form.create-edit-form input#due-date');
      if (projTitleElem.validity.valueMissing) {
        projTitleElem.setCustomValidity('Please give your item a title');
        projTitleElem.reportValidity();
        return;
      } else if (projDueDateElem.value === '' &&
        (createEditFormSubmitButton.dataset.submittype === 'create-todo' || 
        createEditFormSubmitButton.dataset.submittype === 'edit-todo')) {
        projDueDateElem.setCustomValidity('Please give your todo a due date');
        projDueDateElem.reportValidity();
        return;
      } else{
        projTitleElem.setCustomValidity('');
        projTitleElem.reportValidity();
        projDueDateElem.setCustomValidity('');
        projDueDateElem.reportValidity();
      }
      let projDueDate = new Date(Date.parse(projDueDateElem.value));
      let projDescription = document.querySelector('form.create-edit-form input#description').value;
      let projPriority = document.querySelector('form.create-edit-form select#priority').value;
      let projNotes = document.querySelector('form.create-edit-form textarea#notes').value;
      let projCompleted = document.querySelector('form.create-edit-form input#completed').checked;
      if (createEditFormSubmitButton.dataset.submittype === 'create-project') {
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
      } else if (createEditFormSubmitButton.dataset.submittype === 'edit-project') {
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
      } else if (createEditFormSubmitButton.dataset.submittype === 'create-todo') {
        let addTodoButton = document.querySelector('div.main-content div.add-todo-button');
        let projID = addTodoButton.dataset.parentprojid;
        let todoItemObj = new TodoItem({
          title:projTitle,
          description:projDescription,
          dueDate:projDueDate,
          priority:projPriority,
          notes:projNotes,
          completed:projCompleted,
        });
        /* CAUTION: Editing newTodoItemObj after next line will edit its actual value in the projectMap */
        let newTodoItemObj = InformationItemManager.createTodo(projID, todoItemObj);
        /* displayTodos will display all the project's todoItems including the new one 
        because it looks at the projectMap */
        displayTodos(projID, 'due-date-soonest');
      } else if (createEditFormSubmitButton.dataset.submittype === 'edit-todo') {
        let todoID = e.currentTarget.dataset.edittodoid;
        let existingTodoItemObj = InformationItemManager.getTodo(todoID);
        let projID = existingTodoItemObj.parentProjID;
        existingTodoItemObj.title = projTitle;
        existingTodoItemObj.description = projDescription;
        existingTodoItemObj.dueDate = projDueDate;
        existingTodoItemObj.priority = projPriority;
        existingTodoItemObj.notes = projNotes;
        existingTodoItemObj.completed = projCompleted;
        displayTodos(projID, 'due-date-soonest');
      }

      _displayForm({formStr:'none'});
      
      let createEditForm = document.querySelector('form.create-edit-form');
      createEditForm.reset(); // resets form to default values
    });

    let moveTodoFormCancelButton = document.querySelector('form.move-todo-form button.cancel-form-button');
    moveTodoFormCancelButton.addEventListener('click', (e) => {
      _displayForm({formStr:'none'});
      let moveTodoForm = document.querySelector('form.move-todo-form');
      moveTodoForm.reset(); // resets form to default values
    });

    let moveTodoSubmitButton = document.querySelector('form.move-todo-form button.submit-form-button');
    moveTodoSubmitButton.addEventListener('click', (e) => {
      let todoID = e.currentTarget.dataset.sourcetodoid;
      let targetProjectSelectElem = document.querySelector('select.move-todo-projects');
      InformationItemManager.moveTodo(todoID, targetProjectSelectElem.value);
      let moveTodoForm = document.querySelector('form.move-todo-form');
      moveTodoForm.reset(); // resets form to default values
      let todoItemElem = document.querySelector(`tr.todo-item[data-todoid="${todoID}"]`);
      todoItemElem.remove(); // Remove from DOM to preseve todo order
      todoID = '';
      _displayForm({formStr:'none'});
    });
  };
  const setupDisplay = () => {
    attachStaticEventHandlers();
    let allButton = document.querySelector('.button.all-button');
    allButton.dispatchEvent(new Event('click'));
  };

  return {
    displayTodos,
    displayProjects,
    attachStaticEventHandlers,
    setupDisplay,
  };
})();