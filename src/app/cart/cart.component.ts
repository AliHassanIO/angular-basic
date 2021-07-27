import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: Product | undefined;
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
  }

  deleteFromCart(product: Number) {
    console.log(product);
    this.cartService.deleteFromCart(product);
    
    this.items = this.cartService.getItems();
    window.alert('Your product has been deleted to the cart!');
  }

  
}
