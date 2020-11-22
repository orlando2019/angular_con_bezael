import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//INICIOS DE SERVICIOS
import { CargarScriptsService } from './cargar-scripts.service';
//FIN DE LOS SERVICIOS

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
  /* Aqui Añadimos los servis que necesitamos en nuestra aplicacion osea peticiones HTTP*/
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
