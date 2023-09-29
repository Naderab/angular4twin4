import { Component } from '@angular/core';
import { Product } from '../../core/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  title: string = 'Products list';
  color: string = 'red';
  search: string = '';
  products: Product[] = [
    {
      id: '1',
      name: 'iphone',
      price: 3000,
      quantity: 10,
      category: { id: '1', type: 'phone' },
      like: 0,
    },
    {
      id: '2',
      name: 'tv',
      price: 2000,
      quantity: 0,
      category: { id: '2', type: 'electro' },
      like: 0,
    },
    {
      id: '3',
      name: 'Mouse',
      price: 50,
      quantity: 20,
      category: { id: '3', type: 'informatique' },
      like: 0,
    },
  ];

  // getColor(p: Product) {
  //   return p.quantity == 0 ? 'red' : 'green';
  // }
  getColor(t: string) {
    console.log(t);
    return t;
  }
  buy(p: Product) {
    p.quantity--;
  }

  searchProduct() {
    this.products = this.products.filter((p) => p.name == this.search);
  }
  like(t: Product) {
    t.like++;
  }
}
