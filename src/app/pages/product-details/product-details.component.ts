import { Product } from './../../core/interfaces/product';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  
  activatedRoute=inject(ActivatedRoute);
  products=inject(ProductsService);
  cart=inject(CartService);
  productData:Product={} as Product;
  id:string=''

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next:(p)=>{
        // console.log(p);
        this.id=p.get('id') as string;
        // console.log(this.id);
        this.getProductDetails();
      }
    });
    // this.addToCart()
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
      },error:(err)=>{
        console.log(err);
      }
    })
  }
}
