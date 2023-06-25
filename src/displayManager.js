import { TodoManager } from "./todoManager.js";

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

        Object.keys(TodoManager.todoList).forEach(project => {
            const project_div = document.createElement("button")
            project_div.classList.add("dropdown")
            project_div.textContent = project
            project_div.addEventListener('click', () => {
                displayList(TodoManager.todoList[project])
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


export {DisplayManager}