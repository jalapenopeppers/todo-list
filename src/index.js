import './style.css';
import { InformationItemManager } from './informationitemmanager.js'
import GitHubLogo from './images/GitHub-Mark-32px.png';

console.log('this works!');
console.log('epic');

const gitHubLogoElem = document.querySelector('img.github-logo');
gitHubLogoElem.setAttribute('src', GitHubLogo);