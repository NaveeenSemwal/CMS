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
import { ProductGridComponent } from './src/app/product-grid/product-grid.component';
import { CategoryListComponent } from './src/app/category-list/category-list.component';
import { BrandListComponent } from './src/app/brand-list/brand-list.component';
import { PriceFilterComponent } from './src/app/price-filter/price-filter.component';
import { LatestProductComponent } from './src/app/latest-product/latest-product.component';
import { PopularProductComponent } from './src/app/popular-product/popular-product.component';
import { TopRatedProductComponent } from './src/app/top-rated-product/top-rated-product.component';
import { ProductListComponent } from './src/app/product-list/product-list.component';

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
    ProductListComponent
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
