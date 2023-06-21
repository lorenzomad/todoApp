const TodoManager = () => {

    let projects = ['default']
    const todoList = {'default': []}

    const newProject = (project_name) =>{
        //creates a new project container
        projects.push(project_name)
        todoList[project_name] = []
        console.log(todoList)
    }

    const addTodo = (Todo, project) => {
        if (!projects.includes(project)){
            console.log('the project name does not exist')
            return;
        }
        todoList[project].push(Todo)
        console.log(todoList)

    }

    return {
        newProject, 
        addTodo,
        get todoList() {
            return todoList
        },
        get projects() {
            return projects
        }
        
    }

}

export {TodoManager}