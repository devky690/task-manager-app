import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  createNewCategory(title:string){
    this.categoryService.createCategory('stuff').subscribe((response: any)=>
     { 
       console.log(response)
      } );
  }

}
