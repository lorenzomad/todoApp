import { TodoManager } from "./todoManager.js";

const DisplayManager = (() => {
    let todoList
    
    const updateTodoList = (todo_list) => {
        todoList = todo_list 
    }

    const displayList = (Todos) => {
        //displays a given list of todos
        const content = document.querySelector('.content')

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

            content.replaceChildren(newdiv)

        });
    }

    const visualizeDropdown = () => {

        const dropdownContainer = document.createElement('div')
        dropdownContainer.classList.add('ddcontainer')

        Object.keys(todoList).forEach(project => {
            const project_div = document.createElement("div")
            project_div.classList.add("dropdown")
            project_div.textContent = project
            project_div.addEventListener('click', () => {
                displayList(todoList[project])
            })
            dropdownContainer.appendChild(project_div)
            });
        const project_button = document.querySelector(".projects")
        project_button.appendChild(dropdownContainer)
        
    }
    const addEvents = () => {
        const project_button = document.querySelector(".projects")
        project_button.addEventListener('click', visualizeDropdown)

        const new_button = document.querySelector(".new")
    }

    return {displayList, addEvents}
}) ()


export {DisplayManager}