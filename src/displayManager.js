import { TodoManager } from './todoManager.js';
import { Todo } from './todo.js';

const DisplayManager = (() => {
  const displayList = (project) => {
    // displays a given list of todos
    const content = document.querySelector('.content');
    content.textContent = '';
    const Todos = TodoManager.todoList[project];

    Todos.forEach((element) => {
      const newdiv = document.createElement('div');
      newdiv.classList.add('todo');
      if (element.status === 'closed') {
        newdiv.classList.add('closed');
      }
      const title_p = document.createElement('p');
      title_p.textContent = element.title;

      const description_p = document.createElement('p');
      description_p.textContent = element.description;

      const priority_p = document.createElement('p');
      priority_p.textContent = element.priority;

      newdiv.appendChild(title_p);
      newdiv.appendChild(description_p);
      newdiv.appendChild(priority_p);

      content.appendChild(newdiv);
    });

    const current_project = document.querySelector('#current');
    current_project.textContent = `Current Project: ${project}`;
  };

  const visualizeDropdown = () => {
    // generates dropdown list + adds event listeners + changes behavior main button
    const dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('ddcontainer');

    Object.keys(TodoManager.todoList).forEach((project) => {
      const project_div = document.createElement('button');
      project_div.classList.add('dropdown');
      project_div.textContent = project;
      project_div.addEventListener('click', () => {
        displayList(project);
      });
      dropdownContainer.appendChild(project_div);
    });
    const project_nav = document.querySelector('.projects');
    project_nav.appendChild(dropdownContainer);
    const project_button = document.querySelector('#projects');
    project_button.removeEventListener('click', visualizeDropdown);
    project_button.addEventListener('click', closeDropdown);
  };

  const closeDropdown = () => {
    // clsoe the list of projects and readd event listener
    const project_button = document.querySelector('#projects');
    const project_nav = document.querySelector('.projects');
    project_nav.replaceChildren(project_button);
    project_button.addEventListener('click', visualizeDropdown);
  };

  const todoCreation = (todo_title, description, priority, project) => {
    // creates a new todo in the TodoManager from these inputs
    const new_todo = Todo(todo_title);
    new_todo.description = description;
    new_todo.priority = priority;

    TodoManager.addTodo(new_todo, project);

    try {
      displayList(project);
    } catch (error) {
      console.error('project does not exist');
    }
  };

  const todoForm = () => {
    // implements form to create a todo
    const new_todo_form = document.createElement('form')
    const title_form = document.createElement('input');
    title_form.type = 'text'
    title_form.name = "title"
    const description_form = document.createElement('input');
    description_form.type = 'text'
    description_form.name = "description"
    const priority_form = document.createElement('input');
    priority_form.type = 'text'
    priority_form.name = "priority";
    const project_name_form = document.createElement('input');
    project_name_form.type = 'text'
    project_name_form.name = "project_name";
    const submitForm = document.createElement('input')
    submitForm.type = 'submit'
    submitForm.addEventListener('click', () => {
        todoCreation(title_form.value, 
            description_form.value, 
            priority_form.value, 
            project_name_form.value)
    })
    
    new_todo_form.appendChild(title_form);
    new_todo_form.appendChild(description_form);
    new_todo_form.appendChild(priority_form);
    new_todo_form.appendChild(project_name_form);
    new_todo_form.appendChild(submitForm)
     
    const content = document.querySelector(".content");
    content.replaceChildren(new_todo_form);
  }

  const createProjectCategory = (project_name) => {
    TodoManager.newProject(project_name);
    displayList(project_name);
  };

  const projectCreationForm = () => {
    // form to create a new project category
    const new_project_form = document.createElement('form');
    const project_name_form = document.createElement('input');
    project_name_form.type = 'text';
    project_name_form.name = "project_name";
    const submitForm = document.createElement('input');
    submitForm.type = 'submit';
    submitForm.addEventListener('click', () => {
        createProjectCategory(project_name_form.value);
    })
    
    new_project_form.appendChild(project_name_form);
    new_project_form.appendChild(submitForm);
     
    const content = document.querySelector(".content");
    content.replaceChildren(new_project_form);
  }

  const addEvents = () => {
    // assigns event listeners to the butotns
    const project_button = document.querySelector('#projects');
    project_button.addEventListener('click', visualizeDropdown);

    const newtodo_button = document.querySelector('#newtodo');
    newtodo_button.addEventListener('click', todoForm);

    const newproject_button = document.querySelector('#newproject');
    newproject_button.addEventListener('click', projectCreationForm);
  };

  return { displayList, addEvents };
})();

export { DisplayManager };
