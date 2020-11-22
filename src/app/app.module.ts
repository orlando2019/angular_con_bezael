import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/products/product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { DetailsProductComponent } from './components/products/details-product/details-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomePageComponent,
    Page404Component,
    DetailsProductComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
