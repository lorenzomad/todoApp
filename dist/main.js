/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayManager.js":
/*!*******************************!*\
  !*** ./src/displayManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayManager: () => (/* binding */ DisplayManager)
/* harmony export */ });
/* harmony import */ var _todoManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoManager.js */ "./src/todoManager.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



const DisplayManager = (() => {
    let todoList
    
    const updateTodoList = (todo_list) => {
        todoList = todo_list 
    }

    const displayList = (Todos) => {
        //displays a given list of todos
        const content = document.querySelector('.content')
        content.textContent = ''
        

        Todos.forEach(element => {

            const newdiv = document.createElement('div')
            newdiv.classList.add('todo')
            if (element.status === "closed") {
                newdiv.classList.add('closed')
            }
            const title_p = document.createElement('p')
            title_p.textContent = element.title

            const description_p = document.createElement('p')
            description_p.textContent = element.description

            const priority_p = document.createElement('p')
            priority_p.textContent = element.priority

            newdiv.appendChild(title_p)
            newdiv.appendChild(description_p)
            newdiv.appendChild(priority_p)

            content.appendChild(newdiv)

        });
    }

    const visualizeDropdown = () => {
        //generates dropdown list + adds event listeners + changes behavior main button
        const dropdownContainer = document.createElement('div')
        dropdownContainer.classList.add('ddcontainer')

        Object.keys(_todoManager_js__WEBPACK_IMPORTED_MODULE_0__.TodoManager.todoList).forEach(project => {
            const project_div = document.createElement("button")
            project_div.classList.add("dropdown")
            project_div.textContent = project
            project_div.addEventListener('click', () => {
                displayList(_todoManager_js__WEBPACK_IMPORTED_MODULE_0__.TodoManager.todoList[project])
            })
            dropdownContainer.appendChild(project_div)
            });
        const project_nav = document.querySelector(".projects")
        project_nav.appendChild(dropdownContainer)
        const project_button = document.querySelector("#projects")
        project_button.removeEventListener('click', visualizeDropdown)
        project_button.addEventListener('click', closeDropdown)
        
    }

    const closeDropdown = () => {
        // clsoe the list of projects and readd event listener
        const project_button = document.querySelector("#projects")
        const project_nav = document.querySelector(".projects")
        project_nav.replaceChildren(project_button)
        project_button.addEventListener('click', visualizeDropdown)
    }

    const todoCreation = () => {
        //creates a new todo from the console
        const title = prompt("title of the todo");
        const description = prompt("description of the prompt");
        const priority = prompt("value of the priority");
        const project = prompt("what project?");

        const new_todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)(title)
        new_todo.description = description
        new_todo.priority = priority

        _todoManager_js__WEBPACK_IMPORTED_MODULE_0__.TodoManager.addTodo(new_todo, project)

        displayList(_todoManager_js__WEBPACK_IMPORTED_MODULE_0__.TodoManager.todoList[project])

    }

    const createProjectCategory = () => {
        const project_name = prompt(" what is the name of the project?")
        _todoManager_js__WEBPACK_IMPORTED_MODULE_0__.TodoManager.newProject(project_name)
    } 

    const addEvents = () => {
        // assigns event listeners to the butotns
        const project_button = document.querySelector("#projects")
        project_button.addEventListener('click', visualizeDropdown)

        const newtodo_button = document.querySelector("#newtodo")
        newtodo_button.addEventListener('click', todoCreation)

        const newproject_button = document.querySelector("#newproject")
        newproject_button.addEventListener('click', createProjectCategory)
    }

    return {displayList, addEvents}
}) ()




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
const Todo = (title)  => {
    // final properties X is implemented:
    // X title 
    // X description 
    // - dueDate - optional
    // X priority
    // - notes - optional
    // - status

    let _title = title
    let _description = ''
    let _priority = 1
    let _status = 'open'

    const closeTodo = () => {
        _status = "closed"
    }

    
    return {
        get title () {
            return _title 
        },
        set description(description) {
            _description = description
        },
        get description() {
            return _description
        },
        set priority(priority) {
            _priority = priority
        },
        get priority() {
            return _priority
        },
        get status() {
            return _status
        },
        closeTodo,
    }

}



/***/ }),

/***/ "./src/todoManager.js":
/*!****************************!*\
  !*** ./src/todoManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoManager: () => (/* binding */ TodoManager)
/* harmony export */ });
const TodoManager = (() => {

    const _todoList = {'default': []}

    const newProject = (project_name) =>{
        //creates a new project container
        _todoList[project_name] = []
    }

    const addTodo = (Todo, project_name) => {
        if (!(project_name in _todoList)){
            console.log('the project does not exist')
            return;
        } else {
        _todoList[project_name].push(Todo)
        }
    }

    const removeTodo = (Todo, project_name) =>  {
        if (!project_name in _todoList) {
            console.log('the project does not exist')
            return;
        }
        const index = _todoList[project_name].indexOf(Todo)
        if (index === -1){
            console.log("the todo is not in the list for this project")
            return;
        }
        delete _todoList[project_name][index]
    }

    return {
        newProject, 
        addTodo,
        removeTodo,
        get todoList() {
            return _todoList
        },
    }
}) ()



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _todoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoManager */ "./src/todoManager.js");
/* harmony import */ var _displayManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayManager */ "./src/displayManager.js");
//entry point for the app






let first = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.Todo)("fare la spesa")
first.description = 'devo comprare le uova'

let second = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.Todo)('you gotta be kidding bro')
second.description = 'fatti i cazzi tuoi'
second.priority = 4

_todoManager__WEBPACK_IMPORTED_MODULE_1__.TodoManager.newProject('ciccia')
_todoManager__WEBPACK_IMPORTED_MODULE_1__.TodoManager.addTodo(first, 'ciccia')
_todoManager__WEBPACK_IMPORTED_MODULE_1__.TodoManager.addTodo(second, 'ciccia')

console.log(_todoManager__WEBPACK_IMPORTED_MODULE_1__.TodoManager.todoList['ciccia'])

_displayManager__WEBPACK_IMPORTED_MODULE_2__.DisplayManager.displayList(_todoManager__WEBPACK_IMPORTED_MODULE_1__.TodoManager.todoList['ciccia'])
_displayManager__WEBPACK_IMPORTED_MODULE_2__.DisplayManager.addEvents()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ2Q7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQix3REFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3REFBVztBQUN2QyxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qiw4Q0FBSTtBQUM3QjtBQUNBOztBQUVBLFFBQVEsd0RBQVc7O0FBRW5CLG9CQUFvQix3REFBVzs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBLFFBQVEsd0RBQVc7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNBOztBQUVBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7Ozs7OztVQ3ZDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUM4QjtBQUNjO0FBQ007Ozs7QUFJbEQsWUFBWSwyQ0FBSTtBQUNoQjs7QUFFQSxhQUFhLDJDQUFJO0FBQ2pCO0FBQ0E7O0FBRUEscURBQVc7QUFDWCxxREFBVztBQUNYLHFEQUFXOztBQUVYLFlBQVkscURBQVc7O0FBRXZCLDJEQUFjLGFBQWEscURBQVc7QUFDdEMsMkRBQWMsWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvZGlzcGxheU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdG9kb01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9kb01hbmFnZXIgfSBmcm9tIFwiLi90b2RvTWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuY29uc3QgRGlzcGxheU1hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGxldCB0b2RvTGlzdFxuICAgIFxuICAgIGNvbnN0IHVwZGF0ZVRvZG9MaXN0ID0gKHRvZG9fbGlzdCkgPT4ge1xuICAgICAgICB0b2RvTGlzdCA9IHRvZG9fbGlzdCBcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5TGlzdCA9IChUb2RvcykgPT4ge1xuICAgICAgICAvL2Rpc3BsYXlzIGEgZ2l2ZW4gbGlzdCBvZiB0b2Rvc1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gJydcbiAgICAgICAgXG5cbiAgICAgICAgVG9kb3MuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgbmV3ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIG5ld2Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvJylcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgICAgICAgIG5ld2Rpdi5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGl0bGVfcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgdGl0bGVfcC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGVcblxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25fcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgZGVzY3JpcHRpb25fcC50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb25cblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlfcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgcHJpb3JpdHlfcC50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHlcblxuICAgICAgICAgICAgbmV3ZGl2LmFwcGVuZENoaWxkKHRpdGxlX3ApXG4gICAgICAgICAgICBuZXdkaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25fcClcbiAgICAgICAgICAgIG5ld2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9wKVxuXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld2RpdilcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB2aXN1YWxpemVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgLy9nZW5lcmF0ZXMgZHJvcGRvd24gbGlzdCArIGFkZHMgZXZlbnQgbGlzdGVuZXJzICsgY2hhbmdlcyBiZWhhdmlvciBtYWluIGJ1dHRvblxuICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RkY29udGFpbmVyJylcblxuICAgICAgICBPYmplY3Qua2V5cyhUb2RvTWFuYWdlci50b2RvTGlzdCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgICAgcHJvamVjdF9kaXYuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duXCIpXG4gICAgICAgICAgICBwcm9qZWN0X2Rpdi50ZXh0Q29udGVudCA9IHByb2plY3RcbiAgICAgICAgICAgIHByb2plY3RfZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlMaXN0KFRvZG9NYW5hZ2VyLnRvZG9MaXN0W3Byb2plY3RdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RfZGl2KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKVxuICAgICAgICBwcm9qZWN0X25hdi5hcHBlbmRDaGlsZChkcm9wZG93bkNvbnRhaW5lcilcbiAgICAgICAgY29uc3QgcHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpXG4gICAgICAgIHByb2plY3RfYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlzdWFsaXplRHJvcGRvd24pXG4gICAgICAgIHByb2plY3RfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEcm9wZG93bilcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgLy8gY2xzb2UgdGhlIGxpc3Qgb2YgcHJvamVjdHMgYW5kIHJlYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGNvbnN0IHByb2plY3RfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKVxuICAgICAgICBjb25zdCBwcm9qZWN0X25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIilcbiAgICAgICAgcHJvamVjdF9uYXYucmVwbGFjZUNoaWxkcmVuKHByb2plY3RfYnV0dG9uKVxuICAgICAgICBwcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpc3VhbGl6ZURyb3Bkb3duKVxuICAgIH1cblxuICAgIGNvbnN0IHRvZG9DcmVhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgLy9jcmVhdGVzIGEgbmV3IHRvZG8gZnJvbSB0aGUgY29uc29sZVxuICAgICAgICBjb25zdCB0aXRsZSA9IHByb21wdChcInRpdGxlIG9mIHRoZSB0b2RvXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb21wdChcImRlc2NyaXB0aW9uIG9mIHRoZSBwcm9tcHRcIik7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJvbXB0KFwidmFsdWUgb2YgdGhlIHByaW9yaXR5XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvbXB0KFwid2hhdCBwcm9qZWN0P1wiKTtcblxuICAgICAgICBjb25zdCBuZXdfdG9kbyA9IFRvZG8odGl0bGUpXG4gICAgICAgIG5ld190b2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgbmV3X3RvZG8ucHJpb3JpdHkgPSBwcmlvcml0eVxuXG4gICAgICAgIFRvZG9NYW5hZ2VyLmFkZFRvZG8obmV3X3RvZG8sIHByb2plY3QpXG5cbiAgICAgICAgZGlzcGxheUxpc3QoVG9kb01hbmFnZXIudG9kb0xpc3RbcHJvamVjdF0pXG5cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RfbmFtZSA9IHByb21wdChcIiB3aGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0P1wiKVxuICAgICAgICBUb2RvTWFuYWdlci5uZXdQcm9qZWN0KHByb2plY3RfbmFtZSlcbiAgICB9IFxuXG4gICAgY29uc3QgYWRkRXZlbnRzID0gKCkgPT4ge1xuICAgICAgICAvLyBhc3NpZ25zIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYnV0b3Ruc1xuICAgICAgICBjb25zdCBwcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIilcbiAgICAgICAgcHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aXN1YWxpemVEcm9wZG93bilcblxuICAgICAgICBjb25zdCBuZXd0b2RvX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3dG9kb1wiKVxuICAgICAgICBuZXd0b2RvX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZG9DcmVhdGlvbilcblxuICAgICAgICBjb25zdCBuZXdwcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdFwiKVxuICAgICAgICBuZXdwcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3RDYXRlZ29yeSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2Rpc3BsYXlMaXN0LCBhZGRFdmVudHN9XG59KSAoKVxuXG5cbmV4cG9ydCB7RGlzcGxheU1hbmFnZXJ9IiwiY29uc3QgVG9kbyA9ICh0aXRsZSkgID0+IHtcbiAgICAvLyBmaW5hbCBwcm9wZXJ0aWVzIFggaXMgaW1wbGVtZW50ZWQ6XG4gICAgLy8gWCB0aXRsZSBcbiAgICAvLyBYIGRlc2NyaXB0aW9uIFxuICAgIC8vIC0gZHVlRGF0ZSAtIG9wdGlvbmFsXG4gICAgLy8gWCBwcmlvcml0eVxuICAgIC8vIC0gbm90ZXMgLSBvcHRpb25hbFxuICAgIC8vIC0gc3RhdHVzXG5cbiAgICBsZXQgX3RpdGxlID0gdGl0bGVcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gJydcbiAgICBsZXQgX3ByaW9yaXR5ID0gMVxuICAgIGxldCBfc3RhdHVzID0gJ29wZW4nXG5cbiAgICBjb25zdCBjbG9zZVRvZG8gPSAoKSA9PiB7XG4gICAgICAgIF9zdGF0dXMgPSBcImNsb3NlZFwiXG4gICAgfVxuXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHRpdGxlICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGl0bGUgXG4gICAgICAgIH0sXG4gICAgICAgIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9kZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICAgICAgICAgIF9wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfcHJpb3JpdHlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3RhdHVzXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlVG9kbyxcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtUb2RvfSIsImNvbnN0IFRvZG9NYW5hZ2VyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IF90b2RvTGlzdCA9IHsnZGVmYXVsdCc6IFtdfVxuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IChwcm9qZWN0X25hbWUpID0+e1xuICAgICAgICAvL2NyZWF0ZXMgYSBuZXcgcHJvamVjdCBjb250YWluZXJcbiAgICAgICAgX3RvZG9MaXN0W3Byb2plY3RfbmFtZV0gPSBbXVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRvZG8gPSAoVG9kbywgcHJvamVjdF9uYW1lKSA9PiB7XG4gICAgICAgIGlmICghKHByb2plY3RfbmFtZSBpbiBfdG9kb0xpc3QpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgcHJvamVjdCBkb2VzIG5vdCBleGlzdCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90b2RvTGlzdFtwcm9qZWN0X25hbWVdLnB1c2goVG9kbylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAoVG9kbywgcHJvamVjdF9uYW1lKSA9PiAge1xuICAgICAgICBpZiAoIXByb2plY3RfbmFtZSBpbiBfdG9kb0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgcHJvamVjdCBkb2VzIG5vdCBleGlzdCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSBfdG9kb0xpc3RbcHJvamVjdF9uYW1lXS5pbmRleE9mKFRvZG8pXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgdG9kbyBpcyBub3QgaW4gdGhlIGxpc3QgZm9yIHRoaXMgcHJvamVjdFwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBfdG9kb0xpc3RbcHJvamVjdF9uYW1lXVtpbmRleF1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdQcm9qZWN0LCBcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcmVtb3ZlVG9kbyxcbiAgICAgICAgZ2V0IHRvZG9MaXN0KCkge1xuICAgICAgICAgICAgcmV0dXJuIF90b2RvTGlzdFxuICAgICAgICB9LFxuICAgIH1cbn0pICgpXG5cbmV4cG9ydCB7VG9kb01hbmFnZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2VudHJ5IHBvaW50IGZvciB0aGUgYXBwXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgVG9kb01hbmFnZXIgfSBmcm9tIFwiLi90b2RvTWFuYWdlclwiO1xuaW1wb3J0IHsgRGlzcGxheU1hbmFnZXIgfSBmcm9tIFwiLi9kaXNwbGF5TWFuYWdlclwiO1xuXG5cblxubGV0IGZpcnN0ID0gVG9kbyhcImZhcmUgbGEgc3Blc2FcIilcbmZpcnN0LmRlc2NyaXB0aW9uID0gJ2Rldm8gY29tcHJhcmUgbGUgdW92YSdcblxubGV0IHNlY29uZCA9IFRvZG8oJ3lvdSBnb3R0YSBiZSBraWRkaW5nIGJybycpXG5zZWNvbmQuZGVzY3JpcHRpb24gPSAnZmF0dGkgaSBjYXp6aSB0dW9pJ1xuc2Vjb25kLnByaW9yaXR5ID0gNFxuXG5Ub2RvTWFuYWdlci5uZXdQcm9qZWN0KCdjaWNjaWEnKVxuVG9kb01hbmFnZXIuYWRkVG9kbyhmaXJzdCwgJ2NpY2NpYScpXG5Ub2RvTWFuYWdlci5hZGRUb2RvKHNlY29uZCwgJ2NpY2NpYScpXG5cbmNvbnNvbGUubG9nKFRvZG9NYW5hZ2VyLnRvZG9MaXN0WydjaWNjaWEnXSlcblxuRGlzcGxheU1hbmFnZXIuZGlzcGxheUxpc3QoVG9kb01hbmFnZXIudG9kb0xpc3RbJ2NpY2NpYSddKVxuRGlzcGxheU1hbmFnZXIuYWRkRXZlbnRzKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=