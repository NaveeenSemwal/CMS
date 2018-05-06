import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { TopRatedProductComponent } from './top-rated-product/top-rated-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';

// Note : We need to declare AuthGuard in the Module's provider section.

@NgModule({
  declarations: [
    AppComponent,
    ProductGridComponent,
    CategoryListComponent,
    BrandListComponent,
    PriceFilterComponent,
    LatestProductComponent,
    PopularProductComponent,
    TopRatedProductComponent,
    ProductListComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    RouterModule,
    HttpClientModule 
  ],
  providers: [AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true

    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
