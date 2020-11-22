import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<h2>
      Nombre:
      <a [routerLink]="['/product', product.id]">{{ product.name }} </a
      ><!-- Hemos aprendido aqui a pasar un parametro -->
    </h2>
    <div class="card-body text-primary">
      <div>Precio:{{ product.price }}</div>
    </div>`,
})
export class ProductComponent {
  @Input() product;
}
