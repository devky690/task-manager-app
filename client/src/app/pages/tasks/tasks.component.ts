import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) {
    
  }

 ngOnInit(): void {
 }

 createNewTask(title:string){
   this.taskService.createTask('stuff').subscribe((response: any)=>
    { 
      console.log(response)
     } );
 }
}
