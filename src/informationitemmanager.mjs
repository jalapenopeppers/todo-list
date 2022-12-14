import { TodoItem, ProjectItem } from "./objects.mjs";
import { compareAsc, compareDesc, isThisWeek, isToday } from "date-fns";
import { DisplayHandler } from './displayhandler.mjs';

// Firebase stuff
import { 
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  doc
} from "firebase/firestore"; 
import { db } from "./firestore.js";

// async function test () {
//   try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
// }
// test();

export const InformationItemManager = (() => {
  let projectMap = new Map();
  let projectCounter = 0; // used to generate projIDs
  let todoCounter = 0; // used to generate todoIDs

  // Firestore refence to projectMap doc
  const pmDocRef = doc(db, 'projectMap', 'VaO6WvUYoc8RzAaMTd4E');
  const countersDocRef = doc(db, 'counters', 'ODNSO8vKpRRkZLmrLaCq');
  // Update projectMap with the one stored on fireStore
  // _retrieveFireStoreProjectMap();

  function _pmReplacer(key, value) {
    if(value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }
  function _pmReviver(key, value) {
    if(typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
  }
  // Updates Firestore with new projectMap
  async function _updateFirestoreProjectMap () {
    let stringifiedPM = JSON.stringify(projectMap, _pmReplacer);
    // Remove underscores because stringify is adding them idk why
    stringifiedPM = stringifiedPM.replace(/_/g, '');
    // If there is no projectMap already on firestore, make a new one
    // If there is, just update it
    try {
      const pmUpdateDocRef = await updateDoc(pmDocRef, {stringifiedPM});
      const countersUpdateDocRef = await updateDoc(countersDocRef, {
        projectCounter,
        todoCounter
      });
      console.log("Documents updated");
    } catch (e) {
    console.error("Error adding document: ", e);
    }
  }
  // Retrieves projectMap from fireStore and saves it to local projectMap variable
  async function _retrieveFireStoreProjectMap () {
    try {
      const querySnapshot = await getDoc(pmDocRef);
      const stringifiedPM = querySnapshot.data().stringifiedPM;
      const storedProjectMap = JSON.parse(stringifiedPM, _pmReviver);
      projectMap = storedProjectMap;
      // Convert all date strings back into dates
      projectMap.forEach((value, key) => {
        // This loop searches each entry in projectMap
        value.forEach((value2, key) => {
          // This loop searches each map vlaue in each entry of projectMap
          // It includes the project object and the todoItems map
          if (value2.creationDate !== null) {
            value2.creationDate = new Date(value2.creationDate);
          }
          if (value2.dueDate !== null) {
            value2.dueDate = new Date(value2.dueDate);
          }
          if (value2 instanceof Map) {
            value2.forEach((value3, key) => {
              // This loop searches the todoItems map
              if (value3.creationDate !== null) {
                value3.creationDate = new Date(value3.creationDate);
              }
              if (value3.dueDate !== null) {
                value3.dueDate = new Date(value3.dueDate);
              }
            });
          }
        });
      });

      console.log(projectMap);
      DisplayHandler.displayProjects(); // Have to do this here to solve async bugs

      const querySnapshot2 = await getDoc(countersDocRef);
      projectCounter = querySnapshot2.data().projectCounter;
      todoCounter = querySnapshot2.data().todoCounter;
      console.log('Retreived projectCounter:', projectCounter);
      console.log('Retreived todoCounter:', todoCounter);
    } catch (e) {
      console.error("Error retrieving projectMap: ", e);
    }
  }

  const createProject = (projectItem) => {
    projectItem.projID = 'proj' + projectCounter;
    projectCounter++;

    let singleProjectMap = new Map();
    singleProjectMap.set('project', projectItem);
    singleProjectMap.set('todoItems', new Map());
    projectMap.set(projectItem.projID, singleProjectMap);

    _updateFirestoreProjectMap();
    return projectItem;
  };
  const deleteProject = (projID) => {
    projectMap.delete(projID);
    _updateFirestoreProjectMap();
  };
  const getProjects = () => {
    let projectObjArray = [];
    for (let projectEntry of projectMap) {
      // CAUTION: map.get returns references to objects. Changing the reference WILL
      //   change the actual project object in projectMap
      projectObjArray.push(projectEntry[1].get('project'));
    }
    return projectObjArray;
  };
  const getProject = (projIDArg) => {
    let projectObjArray = getProjects();
    for (let projectObj of projectObjArray) {
      if (projectObj.projID === projIDArg) {
        return projectObj;
      }
    }
  };
  const createTodo = (projID, todoItem) => {
    todoItem.todoID = 'todo' + todoCounter;
    todoItem.parentProjID = projID;
    todoCounter++;

    projectMap.get(projID).get('todoItems').set(todoItem.todoID, todoItem);
    _updateFirestoreProjectMap();
    return todoItem;
  };
  const deleteTodo = (todoID) => {
    projectMap.forEach((value, key) => {
      // Attempt to delete the todoItem from every project.
      // Will only work if the todoItem is in the project
      if (value.get('todoItems').delete(todoID) === true) {
        return undefined; // normal return value for .forEach
      };
    });
    _updateFirestoreProjectMap();
  };
  const moveTodo = (todoID, targetProjID) => {
    let tempTodoItem = {};
    projectMap.forEach((value, key) => {
      let todoObj = value.get('todoItems').get(todoID);
      if (todoObj !== undefined) {
        if (todoObj.todoID === todoID) {
          tempTodoItem = todoObj;
          deleteTodo(todoID);
          return undefined; // normal return value for .forEach
        };
      };
    });
    tempTodoItem.parentProjID = targetProjID;
    projectMap.get(targetProjID).get('todoItems').set(todoID, tempTodoItem);
    _updateFirestoreProjectMap();
  };
  const getTodos = (todoCategoryTypeStr = 'all', todoSortStr = 'creation-date') => {
    let todoItemsArray = [];
    
    // First, get the specified todos
    if (todoCategoryTypeStr === 'all') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          todoItemsArray.push(value2);
        });
      });
    } else if (todoCategoryTypeStr === 'due-today') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          if (isToday(value2.dueDate)) {
            todoItemsArray.push(value2);
          }
        });
      });
    } else if (todoCategoryTypeStr === 'due-this-week') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          if (isThisWeek(value2.dueDate)) {
            todoItemsArray.push(value2);
          }
        });
      });
    } else if (todoCategoryTypeStr === 'low-priority') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          if (value2.priority === 'low') {
            todoItemsArray.push(value2);
          };
        });
      });
    } else if (todoCategoryTypeStr === 'med-priority') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          if (value2.priority === 'med') {
            todoItemsArray.push(value2);
          };
        });
      });
    } else if (todoCategoryTypeStr === 'high-priority') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          if (value2.priority === 'high') {
            todoItemsArray.push(value2);
          };
        });
      });
    } else if (todoCategoryTypeStr === 'completed') {
      projectMap.forEach((value1) => {
        value1.get('todoItems').forEach((value2) => {
          if (value2.completed === true) {
            todoItemsArray.push(value2);
          };
        });
      });
    } else if (todoCategoryTypeStr.includes('proj')) {
      // searching for todos in specific project
      projectMap.get(todoCategoryTypeStr).get('todoItems').forEach((value) => {
        todoItemsArray.push(value);
      });
    }

    // Second, sort the retrieved todos
    if (todoSortStr === 'low-high-priority') {
      todoItemsArray.sort((todoItem1, todoItem2) => {
        if ((todoItem1.priority === 'low' && (todoItem2.priority === 'med' || todoItem2.priority === 'high')) ||
            (todoItem1.priority === 'med' && todoItem2.priority === 'high')) {
          return -1;
        } else if (todoItem1.priority === todoItem2.priority) {
          return 0;
        } else if ((todoItem1.priority === 'high' && (todoItem2.priority === 'low' || todoItem2.priority === 'med')) ||
        (todoItem1.priority === 'med' && todoItem2.priority === 'low')) {
          return 1;
        }
      });
    } else if (todoSortStr === 'high-low-priority') {
      todoItemsArray.sort((todoItem1, todoItem2) => {
        if ((todoItem1.priority === 'low' && (todoItem2.priority === 'med' || todoItem2.priority === 'high')) ||
            (todoItem1.priority === 'med' && todoItem2.priority === 'high')) {
          return 1;
        } else if (todoItem1.priority === todoItem2.priority) {
          return 0;
        } else if ((todoItem1.priority === 'high' && (todoItem2.priority === 'low' || todoItem2.priority === 'med')) ||
        (todoItem1.priority === 'med' && todoItem2.priority === 'low')) {
          return -1;
        }
      });
    } else if (todoSortStr === 'creation-date-recent') {
      todoItemsArray.sort((todoItem1, todoItem2) => compareDesc(todoItem1.creationDate, todoItem2.creationDate));
    } else if (todoSortStr === 'creation-date-old') {
      todoItemsArray.sort((todoItem1, todoItem2) => compareAsc(todoItem1.creationDate, todoItem2.creationDate));
    } else if (todoSortStr === 'due-date-soonest') {
      todoItemsArray.sort((todoItem1, todoItem2) => compareAsc(todoItem1.dueDate, todoItem2.dueDate));
    } else if (todoSortStr === 'due-date-latest') {
      todoItemsArray.sort((todoItem1, todoItem2) => compareDesc(todoItem1.dueDate, todoItem2.dueDate));
    }

    return todoItemsArray;
  };
  const getTodo = (todoID) => {
    let todoObj = {};
    for (let [key, value] of projectMap) {
      todoObj = value.get('todoItems').get(todoID);
      if (todoObj !== undefined) {
        if (todoObj.todoID === todoID) {
          break;
        };
      };
    }
    return todoObj;
  };

  return {
    createProject,
    deleteProject,
    getProjects,
    getProject,
    createTodo,
    deleteTodo,
    moveTodo,
    getTodos,
    getTodo,
    _retrieveFireStoreProjectMap,
  };
})();

// InformationItemManager.createProject(new ProjectItem({title:'wash dishes', description:'do it fast'}));
// InformationItemManager.createProject(new ProjectItem({title:'move to me'}));
// let todoObj = new TodoItem({title:'eat crap', dueDate:'2022-10-10T00:00', priority: 'med'});
// todoObj.creationDate = new Date(1900, 1, 1);
// let todoObj1 = new TodoItem({title:'eat crap1', dueDate:'2022-10-07T00:00', priority: 'high'});
// todoObj1.creationDate = new Date(1950, 1, 1);
// let todoObj2 = new TodoItem({title:'eat crap2', dueDate:'2022-10-02T00:00',});
// todoObj2.creationDate = new Date(2019, 1, 1);
// InformationItemManager.createTodo('proj0', todoObj);
// InformationItemManager.createTodo('proj0', todoObj1);
// InformationItemManager.createTodo('proj0', todoObj2);
// InformationItemManager.moveTodo('todo0', 'proj1');
// console.log(InformationItemManager.getProjects()[0].description);

// for (let todo of InformationItemManager.getTodos('all', 'due-date-latest')) {
//   console.log(todo.dueDate);
// }
// DisplayHandler.displayTodos('proj0');