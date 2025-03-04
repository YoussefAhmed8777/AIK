import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  http=inject(HttpClient);
  userToken:string=JSON.stringify(localStorage.getItem('userToken'));

  addToCart(id:string):Observable<any>{
    return this.http.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        "productId":id
      },{
        headers:{
          token:this.userToken,
        }
      }
    )
  };

  getCartData():Observable<any>{
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:{
        token:this.userToken,
      }
    });
  }
}