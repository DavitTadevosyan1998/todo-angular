import { Injectable } from '@angular/core';
import { Todo } from './shared/todo';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  todos: any = JSON.parse(localStorage.getItem('AngularTodo'));
  filter: string = 'all';
  
  getTodos(): Todo[] {
    return this.todos;
  };

  createTodo(text:string, id: number){
    let todo = new Todo(text,id);
    this.todos.push(todo);
    localStorage.setItem('AngularTodo',JSON.stringify(this.todos));
  };

  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      localStorage.setItem('AngularTodo', JSON.stringify(this.todos));
    }
  };

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length
  }

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
    localStorage.setItem('AngularTodo', JSON.stringify(this.todos));
  }
}
