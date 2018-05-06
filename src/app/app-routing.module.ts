
/*
This is Routing file.  We have created this file seprately.
And then we can include this file in AppModule in Import section.

*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AuthGuard } from './auth/auth.guard';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomeComponent } from './home/home.component';

/*  http://localhost:4200/   :   User component will be loaded by default in    app.component.html

http://localhost:4200/sign-up  :  User component will be loaded and it will also load the SignUpComponent in the 
                                  <router-outlet></router-outlet> specfied in  user.component.html


http://localhost:4200/sign-in  :  User component will be loaded and it will also load the SignInComponent in the 
                                  <router-outlet></router-outlet> specfied in  user.component.html
*/
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'sign-up', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'sign-in', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {
    path: 'product-list', component: ProductListComponent , canActivate : [AuthGuard]
  },

  {
    path: 'category-list', component: CategoryListComponent , canActivate : [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
