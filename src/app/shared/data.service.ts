import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products = [
    {
      id: 1,
      name: 'Huevo',
      category: 'Food',
      description: 'Lorem Huevo',
      price: '$350',
    },
    {
      id: 2,
      name: 'Pollo',
      category: 'Food',
      description: 'Pollo Campesino',
      price: '$5.000',
    },
    {
      id: 3,
      name: 'Coca Cola',
      category: 'Drink',
      description: 'Bebida ',
      price: '$1.800',
    },
    {
      id: 4,
      name: 'Galletas Oreo',
      category: 'Galletas De Chocolate',
      description: 'Dulces ',
      price: '$ 800',
    },
    {
      id: 5,
      name: 'Galletas Recreo',
      category: 'Galletas',
      description: 'Dulces y Mekatos ',
      price: '$ 4.500',
    },
    {
      id: 6,
      name: 'Papitas Fritas',
      category: 'Mekatos Papa fritas',
      description: 'Dulces y Mekatos ',
      price: '$ 15.500',
    },
    {
      id: 7,
      name: 'Arroz',
      category: 'Granos',
      description: 'Abarrotes ',
      price: '$ 1.500 lb',
    },

    {
      id: 8,
      name: 'Azucar',
      category: 'Granos',
      description: 'Abarrotes ',
      price: '$ 5.000 lb',
    },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductBid(id) {
    return this.products.filter((product) => product.id == id);
  }
}
