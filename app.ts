import { Aurelia } from 'aurelia-framework'
import {Validation} from 'aurelia-validation';
import {TodoItem} from 'models'

export class App {
  static inject() { return [Validation]; }
  
  todos: Array<TodoItem>;
  newTodoText: string;
  validation: any;
  
  constructor(validation: Validation) {
    this.todos = new Array<TodoItem>();    
    this.todos.push(new TodoItem("Hello world", false));
    this.newTodoText = '';
    
    this.validation = validation.on(this)
        .ensure('newTodoText') 
              .isNotEmpty()
              .hasMinLength(3)
              .hasMaxLength(50)
  }
  
  removeTodo(item: TodoItem) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }
  
  addTodo() {
    this.validation.validate()
      .then(() => {
        this.todos.push(new TodoItem(this.newTodoText, false));
        this.newTodoText = '';
      })
      .catch(() => {
        console.log("Validation errors");
      });
    
  }
  
  completeAll() {    
    for (var todo of this.todos) {
      todo.completed = true;
    }
  }
}