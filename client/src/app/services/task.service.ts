import { Injectable } from '@angular/core';
import { WebRequestService} from './web-request.service'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService:WebRequestService) { }

  createTask(title: string){
    return this.webRequestService.post('task', {title});
  }
}
