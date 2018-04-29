import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cms-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoginError: boolean = false;

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
  }


  login = (username, password) => {

    this._userService.SignIn(username, password).subscribe(
      
      (response: any) => {

      //var JsonObject = JSON.parse(response._body);

      localStorage.setItem('userToken', response.access_token);

      localStorage.setItem('tokenType', response.token_type);

      this.router.navigate(['/product-list']);
    },

      (error: any) => {

        this.isLoginError = true;
        console.log('In the error block' + error);
      })
  }



}
