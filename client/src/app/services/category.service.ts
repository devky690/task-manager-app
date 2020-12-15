import { Injectable } from '@angular/core';
import { WebRequestService} from './web-request.service'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private webRequestService:WebRequestService) { }

  createCategory(title: string){
    return this.webRequestService.post('task', {title});
  }
}
