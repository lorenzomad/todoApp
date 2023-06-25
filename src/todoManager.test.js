import { TodoManager } from './todoManager';
import { Todo } from './todo';

const test_todo = Todo('test');

test('default project', () => {
  expect('default' in TodoManager.todoList).toBe(true);
});

test('add project', () => {
  TodoManager.newProject('chocolate');
  expect(TodoManager.todoList.chocolate).toStrictEqual([]);
});

test('add item to non-existing category', () => {
  TodoManager.addTodo(test_todo, 'ciao');
  expect('ciao' in TodoManager.todoList).toBe(false);
});

test('add item to existing category', () => {
  TodoManager.addTodo(test_todo, 'default');
  expect(TodoManager.todoList.default.includes(test_todo)).toBe(true);
});

test('remove item', () => {
  TodoManager.removeTodo(test_todo, 'default');
  expect(TodoManager.todoList.default.includes(test_todo)).toBe(false);
});
