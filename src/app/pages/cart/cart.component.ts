import { Data } from './../../core/interfaces/wishlist';
import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Cart } from '../../core/interfaces/cart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink,],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cartData=inject(CartService);
  cartDetails:Cart={} as Cart;
  removedMessage:string='';  
  errorMessage:string=''; 
  cartId:string=''; 
  cartCount:number=0;

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartData.getCartData().subscribe({
      next:(res)=>{
        console.log(res);
        this.cartDetails=res.data;
        this.cartId=res.cartId;
        this.cartCount=res.numOfCartItems;        
      },error:(err)=>{
        console.group(err);
      }
    });
  }

  removeProduct(id:string){
    this.cartData.removeFromCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.removedMessage=res.status;
        this.cartDetails=res.data;
        console.log(this.cartDetails)
      },error:(err)=>{
        console.log(err);
        this.errorMessage=err.status;
      }
    })
  }

  updateCartProductQuantity(id:string, count:number){
    this.cartData.updateCartProductQuantity(id, count).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartDetails=res.data;
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  emptyCart(){
    this.cartData.emptyTheCart().subscribe({
      next:(res)=>{
        console.log(res);
        this.removedMessage=res.status;
      },error:(err)=>{
        console.log(err);
      }
    })
  }
}