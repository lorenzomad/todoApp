import { TodoManager } from "./todoManager.js";
import { Todo } from "./todo.js";

const DisplayManager = (() => {
    let todoList
    
    const updateTodoList = (todo_list) => {
        todoList = todo_list 
    }

    const displayList = (project) => {
        //displays a given list of todos
        const content = document.querySelector('.content')
        content.textContent = ''
        const Todos = TodoManager.todoList[project]
        
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

        const current_project = document.querySelector('#current')
        current_project.textContent = "Current Project: " + project
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
                displayList(project)
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

        const new_todo = Todo(title)
        new_todo.description = description
        new_todo.priority = priority

        TodoManager.addTodo(new_todo, project)

        try {
            displayList(project)
        } catch (error) {
            console.error("project does not exist")
        }
    }

    const createProjectCategory = () => {
        const project_name = prompt(" what is the name of the project?")
        TodoManager.newProject(project_name)
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


export {DisplayManager}