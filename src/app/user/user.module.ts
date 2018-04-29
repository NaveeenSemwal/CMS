import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from "@angular/forms";
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';

// I need to include this bcz error : angular2-router-outlet-is-not-a-known-element
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth.interceptor';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [UserComponent, SignInComponent, SignUpComponent, ProductListComponent],
  providers: [UserService],
  exports: [UserComponent, SignInComponent, SignUpComponent, ProductListComponent]
})
export class UserModule { }

/* Note :  If you are using Custom modules then you have  specify component and directive in exports array. Otherwise it will not recognize */