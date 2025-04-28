/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todos = []; // directly initialize the array as a class field

  // Add a new todo
  add(todo) {
    this.todos.push(todo);
  }

  // Remove todo at a given index
  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }

  // Update todo at a given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  // Get all todos
  getAll() {
    return this.todos;
  }

  // Get a specific todo
  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    } else {
      return null;
    }
  }

  // Clear all todos
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
