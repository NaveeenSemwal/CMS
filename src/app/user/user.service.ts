import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx"
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class UserService {


  // Note : HttpClient is the new Upgraded version of Http 
  // https://stackoverflow.com/questions/45129790/difference-between-http-and-httpclient-in-angular-4
  constructor(private http: HttpClient) { }


  SaveUser(user: User): Observable<User> {

    var item = {
      "UserName": user.UserName,
      "Password": user.Password,
      "Email": user.Email,
      "FirstName": user.FirstName,
      "LastName": user.LastName
    };


    let requestHeader = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'No-Auth': 'True' });
  
    let body = item;
    return this.http.post('http://localhost:59026/api/user/register', body, { headers: requestHeader })
    .map(data => <User>data);

  }


  SignIn(userName: string, password: string) {


    let requestHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'No-Auth': 'True' });
    
    let data = "username=" + userName + "&password=" + password + "&grant_type=password";

    return this.http.post('http://localhost:59026/token', data, { headers: requestHeader });
  }


  loggedInUserInfo = () => {

    return this.http.get('http://localhost:59026/api/user/claims')
      .map(data => <User>data)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
