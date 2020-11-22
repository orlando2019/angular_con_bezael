import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { DetailsProductComponent } from './components/products/details-product/details-product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: DetailsProductComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
