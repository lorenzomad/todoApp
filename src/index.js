import { Todo } from "./todo";
import { TodoManager } from "./todoManager";

const todo_manager = TodoManager()

let first = Todo("fare la spesa")

first.description = 'devo comprare le uova'


todo_manager.newProject('ciccia')
todo_manager.addTodo(first, 'ciccia')
