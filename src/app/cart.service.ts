import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  deleteFromCart(product: Number) {
    console.log(product);
    this.items = this.items.filter(item => item.id !== product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
