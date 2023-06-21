import { Todo } from "./todo";
import { TodoManager } from "./todoManager";
import { DisplayManager } from "./displayManager";



let first = Todo("fare la spesa")
first.description = 'devo comprare le uova'

let second = Todo('you gotta be kidding bro')
second.description = 'fatti i cazzi tuoi'
second.priority = 4

TodoManager.newProject('ciccia')
TodoManager.addTodo(first, 'ciccia')
TodoManager.addTodo(second, 'ciccia')


DisplayManager.displayList(TodoManager.todoList['ciccia'])