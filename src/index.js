import './style.css';
import { InformationItemManager } from './informationitemmanager.js'
import GitHubLogo from './images/GitHub-Mark-32px.png';
import CheckListLogo from './icons/clipboard-list.svg';
import AddTodoIcon from './icons/plus.svg';

console.log('this works!');
console.log('epic');

// Setup GitHub logo
const gitHubLogoElem = document.querySelector('img.github-logo');
gitHubLogoElem.setAttribute('src', GitHubLogo);

// Setup icons
const checkListLogoElem = document.querySelector('img.header-logo');
checkListLogoElem.setAttribute('src', CheckListLogo);
const addTodoElem = document.querySelector('.add-todo-button-icon');
addTodoElem.setAttribute('src', AddTodoIcon);