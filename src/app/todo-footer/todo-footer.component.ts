import { Component, OnInit } from '@angular/core';
import { NewServiceService } from './../new-service.service'
import { Todo } from './../shared/todo'

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  todos: Todo[];

  get remaining() : number {
    return this.todoService.remaining()
  };

  // atLeastOneCompleted() : boolean {
  //   return this.todos.filter(todo => todo.completed).length > 0;
  // };

  // clearCompleted(){
  //   this.todos = this.todos.filter(todo => !todo.completed);
  // }

  constructor(public todoService: NewServiceService ) {
    this.todos = []
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

}
