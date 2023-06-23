const TodoManager = (() => {

    const todoList = {'default': []}

    const newProject = (project_name) =>{
        //creates a new project container
        todoList[project_name] = []
    }

    const addTodo = (Todo, project_name) => {
        if (!(project_name in todoList)){
            console.log('the project does not exist')
            return;
        } else {
        todoList[project_name].push(Todo)
        }
    }

    const removeTodo = (Todo, project_name) =>  {
        if (!project_name in todoList) {
            console.log('the project does not exist')
            return;
        }
        const index = todoList[project_name].indexOf(Todo)
        if (index === -1){
            console.log("the todo is not in the list for this project")
            return;
        }
        delete todoList[project_name][index]
    }

    return {
        newProject, 
        addTodo,
        removeTodo,
        get todoList() {
            return todoList
        },
    }
}) ()

export {TodoManager}