import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  http=inject(HttpClient);
  userToken=localStorage.getItem('userToken') as string; // its an equivalent to the method i did in cart service.

  addToWishlist(id:string):Observable<any>{
    return this.http.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, 
      {
        "productId": id,
      },{
        headers:{
          token:this.userToken,
        }
      }
    );
  }

  getWishlistData():Observable<any>{
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        headers:{
          token:this.userToken,
        }
      }
    )
  }

  removeFromWishlist(id:string):Observable<any>{
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
      {
        headers:{
          token:this.userToken,
        }
      }
    )
  }
}
