import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  http=inject(HttpClient);
  token:string=localStorage.getItem('userToken') as string;

  onlinePayment(id:string, formdata:any):Observable<any>{
    return this.http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      {
        "shippingAddress":formdata
      },{
        headers:{
          token:this.token,
        }
      }
    )
  }
}
