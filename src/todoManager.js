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

export {TodoManager}