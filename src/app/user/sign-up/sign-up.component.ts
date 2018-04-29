import { Component, OnInit } from '@angular/core';
import { IUser } from '../iuser';

import { User } from "../user.model";
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cms-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, IUser {

  userModel: User;

  errors: string[]=new Array<string>();

  constructor(private _userService: UserService,private router: Router) { }

  ngOnInit() {

    this.userModel = new User();
  }

  Register(model: User, isValid: boolean) {


    //console.log(model);

    if (model != null && isValid) {

      this._userService.SaveUser(model).subscribe(
        (response: User) => {

          console.log('In the success block');
          console.log(response);

          this.router.navigate(['/sign-in']);
        },

        (error: any) => {
          console.log('In the error block');

          console.log(error._body);

         // var JSONObject = JSON.parse(error._body);
         // var errors = JSONObject["ModelState"];

          // for (var key in errors) {
          //   var data = errors[key];
          //   for (key in data) {

          //     this.errors.push(data[key])

          //   }
          // }



          // 
        }
      );

      this.resetForm(model);
    }

  }

  resetForm = (model: User) => {

    model.UserName = '';
    model.Password = '';
    model.Email = '';
    model.FirstName = '';
    model.LastName = '';

  };



}