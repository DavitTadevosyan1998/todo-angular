import { Component, OnInit } from '@angular/core';
import { Todo } from './../shared/todo';
import { NewServiceService } from './../new-service.service'
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations:[
    trigger('fade', [
      transition(':enter',[
        style({ opacity : 0, transform : 'translateY(30px)'}),
        animate(1000, style({ opacity : 1, transform:'translateY(0px)'}))
      ]),

      transition(':leave', [
        animate(1000, style({ opacity: 1, transform: 'translateY(30px)' }))
      ]),

    ])
  ]
})
export class TodoListComponent implements OnInit {
  todos : Todo[];
  beforeEditCache: string = '';

  toggle(todo : Todo){
    this.todoService.toggleTodo(todo);
  };

  allItems(event) {
    this.todos.forEach((todo) => todo.completed = event.target.checked)
  };

  removeTodos(todo: Todo) {
    this.todoService.deleteTodo(todo);
  };

  editTodo(todo: Todo) {
    this.beforeEditCache = todo.text;
    todo.editing = true;
  };

  doneEdit(todo : Todo){
    if (todo.text.trim().length === 0) {
      todo.text = this.beforeEditCache;
    }
    todo.editing = false;
  };

  cancelEdit(todo: Todo) {
    todo.text = this.beforeEditCache;
    todo.editing = false;
  }

  get anyRemaining() {
    let remaining = this.todos.filter(todo => !todo.completed).length;
    return remaining == 0;
  };

  constructor(public todoService: NewServiceService ) { 
    this.todos = []
  }

  ngOnInit() {
    this.beforeEditCache = '';
    this.todos = this.todoService.getTodos();
  }

}
