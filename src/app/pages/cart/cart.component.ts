import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Cart } from '../../core/interfaces/cart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cartData=inject(CartService);
  // cartDetails:Cart={} as Cart;

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartData.getCartData().subscribe({
      next:(res)=>{
        console.log(res);
        // this.cartDetails=res.data;
      },error:(err)=>{
        console.group(err);
      }
    });
  }
}