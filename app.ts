import { Aurelia } from 'aurelia-framework'
import {TodoItem} from 'models'

export class App {
  todos: Array<TodoItem>;
  newTodoText: string;
  
  constructor() {
    this.todos = new Array<TodoItem>();    
    this.todos.push(new TodoItem("Hello world", false));
    this.newTodoText = '';
  }
  
  removeTodo(item: TodoItem) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }
  
  doneTyping($event) {
    if ($event.which === 13) {
      this.addTodo();
    }
  }
  
  addTodo() {
    this.todos.push(new TodoItem(this.newTodoText, false));
    this.newTodoText = '';
  }
  
  completeAll() {    
    for (var todo of this.todos) {
      todo.completed = true;
    }
  }
}