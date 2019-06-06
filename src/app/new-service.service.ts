import { Injectable } from '@angular/core';
import { Todo } from './shared/todo';
import { todos } from './shared/data'

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  todos: Todo[] = todos;
  filter: string = 'all';

  getTodos(): Todo[] {
    return this.todos;
  };

  createTodo(text:string, id: number){
    let todo = new Todo(text,id);
    this.todos.push(todo);
  };

  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  };

  toggleTodo(todo : Todo){
    todo.completed = !todo.completed;
  };

  get todosFiltered() : Todo[] {
    if (this.filter == 'all') {
      return this.todos
    } else if (this.filter == 'active') {
      return this.todos.filter(todo => !todo.completed)
    } else if (this.filter == 'completed') {
      return this.todos.filter(todo => todo.completed)
    }
    return this.todos
  };

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  };

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}
