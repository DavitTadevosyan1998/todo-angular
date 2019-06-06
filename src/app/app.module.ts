import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutofocusModule } from 'angular-autofocus-fix';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { NewServiceService } from './new-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TodoListComponent,
    TodoFooterComponent,
    FooterInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutofocusModule,
    BrowserAnimationsModule,
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
