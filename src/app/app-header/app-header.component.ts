import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../new-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {
  text: string = "";
  id: number = 0;

  constructor(private todoService: NewServiceService) { }

  addText(event:Event){
    if (this.text.trim().length === 0) {
      return;
    }
    event.preventDefault();
    this.todoService.createTodo(this.text,this.id);
    this.text = '';
    this.id++;
  }

  ngOnInit() {
  }

}
