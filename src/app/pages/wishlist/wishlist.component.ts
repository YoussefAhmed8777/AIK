import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart } from '../../core/interfaces/cart';
import { Wishlist } from '../../core/interfaces/wishlist';

@Component({
  selector: 'app-wishlist',
  imports: [CurrencyPipe, RouterLink,],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  
  wishListData=inject(WishlistService);
  wishListDetails:Wishlist={} as Wishlist;
  removedMessage:string='';  
  errorMessage:string=''; 
  wishCount:number=0;
  
  ngOnInit(): void {
    this.getWishlist();
  }
  
  getWishlist(){
    this.wishListData.getWishlistData().subscribe({
      next:(res)=>{
        console.log(res);
        this.wishListDetails=res;
        this.wishCount=res.count;
      },error:(err)=>{
        console.group(err);
      }
    });
  };

  removeProduct(id:string){
    this.wishListData.removeFromWishlist(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.removedMessage=res.status;
      },error:(err)=>{
        console.log(err);
        this.errorMessage=err.status;
      }
    })
  }
}