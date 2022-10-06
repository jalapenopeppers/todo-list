// const TodoItem = (title) => {
//   const getTitle = () => {
//     return title;
//   };
//   const setTitle = (newTitle) => {
//     title = newTitle;
//   };

//   return {
//     getTitle,
//     setTitle,
//   };
// }

// let todoItem = TodoItem('Eat cake');
// // todoItem.setTitle('wash clothes');
// // todoItem.title = 'hamburger';
// console.log(todoItem.getTitle());
// todoItem.setTitle('yumm');
// console.log(todoItem.getTitle());

/*
  The following was chosen as the most succinct yet understandable
    and practical solution to organizing the objects.
*/

// Object storing all the methods shared by todoItem and projectItem
const infoItemMethods = {
  get title() {
    return this._title;
  },
  set title(newTitle) {
    this._title = newTitle;
  },
  get description() {
    return this._description;
  },
  set description(newDescription) {
    this._description = newDescription;
  },
  get dueDate() {
    return this._dueDate;
  },
  set dueDate(newDueDate) {
    this._dueDate = newDueDate;
  },
  get priority() {
    return this._priority;
  },
  set priority(newPriority) {
    this._priority = newPriority;
  },
  get notes() {
    return this._notes;
  },
  set notes(newNotes) {
    this._notes = newNotes;
  },
  get completed() {
    return this._completed;
  },
  set completed(newCompleted) {
    this._completed = newCompleted;
  },
}

// TodoItem constructor
function TodoItem(title, description = '', dueDate = '', priority = '', notes = '', completed = false) {
  this._title = title;
  this._description = description;
  this._dueDate = dueDate;
  this._priority = priority;
  this._notes = notes;
  this._completed = completed;

  this._todoID = '';
}
// Set TodoItem's prototype to be the object with all the methods +
//   some additional methods to deal with todoID
TodoItem.prototype = Object.create(infoItemMethods, {
  todoID: {
    configurable: false,
    get() {
      return this._todoID;
    },
    set(newTodoID) {
      this._todoID = newTodoID;
    }, 
  },
});

// ProjectItem constructor
function ProjectItem(title, description = '', dueDate = '', priority = '', notes = '', completed = false) {
  this._title = title;
  this._description = description;
  this._dueDate = dueDate;
  this._priority = priority;
  this._notes = notes;
  this._completed = completed;

  this._projID = '';
}
// Set ProjectItem's prototype to be the object with all the methods +
//   some additional methods to deal with projID
ProjectItem.prototype = Object.create(infoItemMethods, {
  projID: {
    configurable: false,
    get() {
      return this._projID;
    },
    set(newProjID) {
      this._projID = newProjID;
    }, 
  },
});

let todoItemObj = new TodoItem('yo', 'yo mama');
console.log(todoItemObj.title);

let projItemObj = new ProjectItem('scooby', 'doo');
console.log(projItemObj.title);
console.log(projItemObj.description);
console.log(projItemObj.projID);