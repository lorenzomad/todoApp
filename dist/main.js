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

    const addEvents = () => {
        // assigns event listeners to the butotns
        const project_button = document.querySelector("#projects")
        project_button.addEventListener('click', visualizeDropdown)

        const new_button = document.querySelector(".new")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQix3REFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3REFBVztBQUN2QyxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7Ozs7Ozs7O1VDdkNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQzhCO0FBQ2M7QUFDTTs7OztBQUlsRCxZQUFZLDJDQUFJO0FBQ2hCOztBQUVBLGFBQWEsMkNBQUk7QUFDakI7QUFDQTs7QUFFQSxxREFBVztBQUNYLHFEQUFXO0FBQ1gscURBQVc7O0FBRVgsWUFBWSxxREFBVzs7QUFFdkIsMkRBQWMsYUFBYSxxREFBVztBQUN0QywyREFBYyxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9kaXNwbGF5TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy90b2RvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2RvTWFuYWdlciB9IGZyb20gXCIuL3RvZG9NYW5hZ2VyLmpzXCI7XG5cbmNvbnN0IERpc3BsYXlNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBsZXQgdG9kb0xpc3RcbiAgICBcbiAgICBjb25zdCB1cGRhdGVUb2RvTGlzdCA9ICh0b2RvX2xpc3QpID0+IHtcbiAgICAgICAgdG9kb0xpc3QgPSB0b2RvX2xpc3QgXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUxpc3QgPSAoVG9kb3MpID0+IHtcbiAgICAgICAgLy9kaXNwbGF5cyBhIGdpdmVuIGxpc3Qgb2YgdG9kb3NcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIFxuXG4gICAgICAgIFRvZG9zLmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBuZXdkaXYuY2xhc3NMaXN0LmFkZCgndG9kbycpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdkaXYuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlX3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHRpdGxlX3AudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlXG5cbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uX3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX3AudGV4dENvbnRlbnQgPSBlbGVtZW50LmRlc2NyaXB0aW9uXG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5X3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHByaW9yaXR5X3AudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5XG5cbiAgICAgICAgICAgIG5ld2Rpdi5hcHBlbmRDaGlsZCh0aXRsZV9wKVxuICAgICAgICAgICAgbmV3ZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX3ApXG4gICAgICAgICAgICBuZXdkaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlfcClcblxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdkaXYpXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdmlzdWFsaXplRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIC8vZ2VuZXJhdGVzIGRyb3Bkb3duIGxpc3QgKyBhZGRzIGV2ZW50IGxpc3RlbmVycyArIGNoYW5nZXMgYmVoYXZpb3IgbWFpbiBidXR0b25cbiAgICAgICAgY29uc3QgZHJvcGRvd25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZGNvbnRhaW5lcicpXG5cbiAgICAgICAgT2JqZWN0LmtleXMoVG9kb01hbmFnZXIudG9kb0xpc3QpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgICAgIHByb2plY3RfZGl2LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93blwiKVxuICAgICAgICAgICAgcHJvamVjdF9kaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0XG4gICAgICAgICAgICBwcm9qZWN0X2Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TGlzdChUb2RvTWFuYWdlci50b2RvTGlzdFtwcm9qZWN0XSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0X2RpdilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwcm9qZWN0X25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIilcbiAgICAgICAgcHJvamVjdF9uYXYuYXBwZW5kQ2hpbGQoZHJvcGRvd25Db250YWluZXIpXG4gICAgICAgIGNvbnN0IHByb2plY3RfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKVxuICAgICAgICBwcm9qZWN0X2J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHZpc3VhbGl6ZURyb3Bkb3duKVxuICAgICAgICBwcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRHJvcGRvd24pXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIC8vIGNsc29lIHRoZSBsaXN0IG9mIHByb2plY3RzIGFuZCByZWFkZCBldmVudCBsaXN0ZW5lclxuICAgICAgICBjb25zdCBwcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIilcbiAgICAgICAgY29uc3QgcHJvamVjdF9uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpXG4gICAgICAgIHByb2plY3RfbmF2LnJlcGxhY2VDaGlsZHJlbihwcm9qZWN0X2J1dHRvbilcbiAgICAgICAgcHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aXN1YWxpemVEcm9wZG93bilcbiAgICB9XG5cbiAgICBjb25zdCBhZGRFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIC8vIGFzc2lnbnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBidXRvdG5zXG4gICAgICAgIGNvbnN0IHByb2plY3RfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKVxuICAgICAgICBwcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpc3VhbGl6ZURyb3Bkb3duKVxuXG4gICAgICAgIGNvbnN0IG5ld19idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1wiKVxuICAgIH1cblxuICAgIHJldHVybiB7ZGlzcGxheUxpc3QsIGFkZEV2ZW50c31cbn0pICgpXG5cblxuZXhwb3J0IHtEaXNwbGF5TWFuYWdlcn0iLCJjb25zdCBUb2RvID0gKHRpdGxlKSAgPT4ge1xuICAgIC8vIGZpbmFsIHByb3BlcnRpZXMgWCBpcyBpbXBsZW1lbnRlZDpcbiAgICAvLyBYIHRpdGxlIFxuICAgIC8vIFggZGVzY3JpcHRpb24gXG4gICAgLy8gLSBkdWVEYXRlIC0gb3B0aW9uYWxcbiAgICAvLyBYIHByaW9yaXR5XG4gICAgLy8gLSBub3RlcyAtIG9wdGlvbmFsXG4gICAgLy8gLSBzdGF0dXNcblxuICAgIGxldCBfdGl0bGUgPSB0aXRsZVxuICAgIGxldCBfZGVzY3JpcHRpb24gPSAnJ1xuICAgIGxldCBfcHJpb3JpdHkgPSAxXG4gICAgbGV0IF9zdGF0dXMgPSAnb3BlbidcblxuICAgIGNvbnN0IGNsb3NlVG9kbyA9ICgpID0+IHtcbiAgICAgICAgX3N0YXR1cyA9IFwiY2xvc2VkXCJcbiAgICB9XG5cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgdGl0bGUgKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aXRsZSBcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX2Rlc2NyaXB0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xuICAgICAgICAgICAgX3ByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9wcmlvcml0eVxuICAgICAgICB9LFxuICAgICAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdGF0dXNcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VUb2RvLFxuICAgIH1cblxufVxuXG5leHBvcnQge1RvZG99IiwiY29uc3QgVG9kb01hbmFnZXIgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgX3RvZG9MaXN0ID0geydkZWZhdWx0JzogW119XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gKHByb2plY3RfbmFtZSkgPT57XG4gICAgICAgIC8vY3JlYXRlcyBhIG5ldyBwcm9qZWN0IGNvbnRhaW5lclxuICAgICAgICBfdG9kb0xpc3RbcHJvamVjdF9uYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVG9kbyA9IChUb2RvLCBwcm9qZWN0X25hbWUpID0+IHtcbiAgICAgICAgaWYgKCEocHJvamVjdF9uYW1lIGluIF90b2RvTGlzdCkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBwcm9qZWN0IGRvZXMgbm90IGV4aXN0JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RvZG9MaXN0W3Byb2plY3RfbmFtZV0ucHVzaChUb2RvKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9IChUb2RvLCBwcm9qZWN0X25hbWUpID0+ICB7XG4gICAgICAgIGlmICghcHJvamVjdF9uYW1lIGluIF90b2RvTGlzdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBwcm9qZWN0IGRvZXMgbm90IGV4aXN0JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IF90b2RvTGlzdFtwcm9qZWN0X25hbWVdLmluZGV4T2YoVG9kbylcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSB0b2RvIGlzIG5vdCBpbiB0aGUgbGlzdCBmb3IgdGhpcyBwcm9qZWN0XCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIF90b2RvTGlzdFtwcm9qZWN0X25hbWVdW2luZGV4XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5ld1Byb2plY3QsIFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICByZW1vdmVUb2RvLFxuICAgICAgICBnZXQgdG9kb0xpc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RvZG9MaXN0XG4gICAgICAgIH0sXG4gICAgfVxufSkgKClcblxuZXhwb3J0IHtUb2RvTWFuYWdlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vZW50cnkgcG9pbnQgZm9yIHRoZSBhcHBcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBUb2RvTWFuYWdlciB9IGZyb20gXCIuL3RvZG9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBEaXNwbGF5TWFuYWdlciB9IGZyb20gXCIuL2Rpc3BsYXlNYW5hZ2VyXCI7XG5cblxuXG5sZXQgZmlyc3QgPSBUb2RvKFwiZmFyZSBsYSBzcGVzYVwiKVxuZmlyc3QuZGVzY3JpcHRpb24gPSAnZGV2byBjb21wcmFyZSBsZSB1b3ZhJ1xuXG5sZXQgc2Vjb25kID0gVG9kbygneW91IGdvdHRhIGJlIGtpZGRpbmcgYnJvJylcbnNlY29uZC5kZXNjcmlwdGlvbiA9ICdmYXR0aSBpIGNhenppIHR1b2knXG5zZWNvbmQucHJpb3JpdHkgPSA0XG5cblRvZG9NYW5hZ2VyLm5ld1Byb2plY3QoJ2NpY2NpYScpXG5Ub2RvTWFuYWdlci5hZGRUb2RvKGZpcnN0LCAnY2ljY2lhJylcblRvZG9NYW5hZ2VyLmFkZFRvZG8oc2Vjb25kLCAnY2ljY2lhJylcblxuY29uc29sZS5sb2coVG9kb01hbmFnZXIudG9kb0xpc3RbJ2NpY2NpYSddKVxuXG5EaXNwbGF5TWFuYWdlci5kaXNwbGF5TGlzdChUb2RvTWFuYWdlci50b2RvTGlzdFsnY2ljY2lhJ10pXG5EaXNwbGF5TWFuYWdlci5hZGRFdmVudHMoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==