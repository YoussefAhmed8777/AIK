import { FormsModule } from '@angular/forms';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { SearchPipe } from '../../shared/pipes/search.pipe';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  product=inject(ProductsService);
  productList:Product[]=[]
  // searchTerm:string=''
  // currentDate= new Date()

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.product.getProducts().subscribe({
      next:(res)=>{
        // console.log(res);
        this.productList=res.data;
      },error:(error)=>{
      }
    })
  }

  ngOnDestroy(): void {
    this.getProduct();
  }
}
