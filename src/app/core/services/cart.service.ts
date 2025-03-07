import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  http=inject(HttpClient);
  userToken:string=localStorage.getItem('userToken') as string; //the error was that json stringify returns the value of the key with ""

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

  removeFromCart(id:string):Observable<any>{
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers:{
          token:this.userToken,
        }
      }
    )
  }

  updateCartProductQuantity(id:string, count:number):Observable<any>{
    return this.http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
      "count": count,
      },{
        headers:{
          token:this.userToken,
        }
      }
    )
  }

  emptyTheCart():Observable<any>{
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers:{
          token:this.userToken,
        }
      }
    )
  }
}