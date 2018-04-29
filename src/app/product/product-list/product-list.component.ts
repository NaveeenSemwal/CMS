import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'cms-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  userInfo: User = new User();

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {

    var result = this._userService.loggedInUserInfo().subscribe(

      (response: any) => {

        console.log("In success block");

        this.userInfo.FirstName = response.FirstName;
        this.userInfo.Email = response.Email;



      }, (error: any) => {

        console.log("In error block" + error);
      })

  }


  logout = () => {

    localStorage.removeItem('userToken');
    this.router.navigate(['/sign-in']);

  }







}
