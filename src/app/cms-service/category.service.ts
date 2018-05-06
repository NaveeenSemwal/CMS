import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../cms-model/category.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  GetAllCategories = () => {

    return this.http.get('http://localhost:59026/api/categories')
      .map((response: Response) => response)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error || 'Server error');
  }

}
