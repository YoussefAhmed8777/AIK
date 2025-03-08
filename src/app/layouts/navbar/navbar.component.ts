import { Wishlist } from './../../core/interfaces/wishlist';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  
  router=inject(Router)
  authentication=inject(AuthenticationService);
  wishlist=inject(WishlistService);
  WishlistCount:number=0;
  @Input()isLoggedIn:boolean=true;

  ngOnInit(): void {
    this.getWishlist()
  }

  logout():void{
    this.authentication.logout();
  }

  getWishlist(){
    this.wishlist.getWishlistData().subscribe({
      next:(res)=>{
        console.log(res);
        this.WishlistCount=res.count;
      },error:(err)=>{
        console.log(err)
      }
    })
  }
}