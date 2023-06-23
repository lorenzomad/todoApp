import { Todo } from "./todo";

const test_todo = Todo("test")

test('close item', () => {
    test_todo.closeTodo()
    expect(test_todo.status).toBe("closed");
  });

