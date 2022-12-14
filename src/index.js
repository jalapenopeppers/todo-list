import './style.css';
import { format } from 'date-fns';
import { InformationItemManager } from './informationitemmanager.mjs'
import GitHubLogo from './images/GitHub-Mark-32px.png';
import CheckListLogo from './icons/clipboard-list.svg';
import AddIcon from './icons/plus.svg';
import EditIcon from './icons/pencil-outline.svg'
import DeleteIcon from './icons/trash-can-outline.svg'
import MoveIcon from './icons/folder-move-outline.svg';

// temp 
import { DisplayHandler} from './displayhandler.mjs';

console.log('this works!');
console.log('epic');

// Setup GitHub logo
const gitHubLogoElem = document.querySelector('img.github-logo');
gitHubLogoElem.setAttribute('src', GitHubLogo);

// Setup icons
const checkListLogoElem = document.querySelector('img.header-logo');
checkListLogoElem.setAttribute('src', CheckListLogo);
const addTodoElem = document.querySelector('.add-todo-button-icon');
addTodoElem.setAttribute('src', AddIcon);
const addProjectElem = document.querySelector('.add-project-button-icon');
addProjectElem.setAttribute('src', AddIcon);
// const editProjectElem = document.querySelector('.edit-project-button-icon');
// editProjectElem.setAttribute('src', EditIcon);
// const deleteProjectElem = document.querySelector('.delete-project-button-icon');
// deleteProjectElem.setAttribute('src', DeleteIcon);
// const moveTodoElem = document.querySelector('.todo-item-move-button-icon');
// moveTodoElem.setAttribute('src', MoveIcon);
// const deleteTodoElem = document.querySelector('.todo-item-delete-button-icon');
// deleteTodoElem.setAttribute('src', DeleteIcon);

// Clock functionality
const clockElement = document.querySelector('.datetime-container');
function clock() {
  clockElement.textContent = format(new Date(), 'EEEE, MMMM d  |  h:mmaaa');
}
//The following runs once so date immediately appears on screen
clock();
setInterval(clock, 1000);

DisplayHandler.setupDisplay();

InformationItemManager.retrieveFireStoreProjectMap();
// DisplayHandler.displayProjects();