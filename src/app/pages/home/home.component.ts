import { FormsModule } from '@angular/forms';
import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { SearchPipe } from '../../shared/pipes/search.pipe';
import * as AOS from 'aos';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { Data, Wishlist } from '../../core/interfaces/wishlist';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  product=inject(ProductsService);
  cart=inject(CartService);
  wishList=inject(WishlistService);
  productList:Product[]=[];
  wishlistId:string='';
  addedMessage:string='';  
  errorMessage:string='';  

  // searchTerm:string=''
  // currentDate= new Date()

  ngOnInit(): void {
    this.getProduct();
    AOS.init();
  };

  getProduct(){
    this.product.getProducts().subscribe({
      next:(res)=>{
        // console.log(res);
        this.productList=res.data;
      },error:(error)=>{
      }
    })
  };

  addToCart(id:string):void{
    this.cart.addToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.addedMessage=res.message;
        console.log(this.addedMessage);
      },error:(err)=>{
        console.log(err);
        this.errorMessage=err.message;
        console.log(this.errorMessage);
      }
    })
  };

  addToWishlist(id:string):void{
    this.wishList.addToWishlist(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.addedMessage=res.message;
        this.wishlistId=res.data.id;
      },error:(err)=>{
        console.log(err);
        this.errorMessage=err.message;
      }
    })
  }
}
