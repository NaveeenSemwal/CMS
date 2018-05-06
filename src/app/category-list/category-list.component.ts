import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../cms-service/category.service';
import { Category } from '../cms-model/category.model';

@Component({
  selector: 'cms-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Array<any> = [];


  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {

   this. GetAll();
  }


  GetAll = () => {

    this._categoryService.GetAllCategories().subscribe(response => this.categories = response),
      (error: any) => {
        console.log('In the error block in component');
        console.log(error._body);
      }
  }
}
