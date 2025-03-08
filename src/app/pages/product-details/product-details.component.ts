import { Product } from './../../core/interfaces/product';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink,],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  
  activatedRoute=inject(ActivatedRoute);
  products=inject(ProductsService);
  cart=inject(CartService);
  wishList=inject(WishlistService);
  productData:Product={} as Product;
  id:string='';
  wishlistId:string='';
  addedMessage:string='';  
  errorMessage:string='';  

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(p)=>{
        // console.log(p);
        this.id=p.get('id') as string;
        // console.log(this.id);
        this.getProductDetails();
      }
    });
  };

  getProductDetails(){
    this.products.getSpecificProducts(this.id).subscribe({
      next:(res)=>{
        // console.log(res);
        this.productData=res.data
      }
    })
  }

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
        this.wishlistId=res.data
      },error:(err)=>{
        console.log(err);
        this.errorMessage=err.message;
      }
    })
  }
}
