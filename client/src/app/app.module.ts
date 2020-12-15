import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import {HttpClientModule} from '@angular/common/http';
import {TaskItemComponent} from './pages/task-item/task-item.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryItemComponent } from './pages/category-item/category-item.component'

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskItemComponent,
    CategoryComponent,
    CategoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
