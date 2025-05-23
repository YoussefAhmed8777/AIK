import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  http=inject(HttpClient);

  getAllBrands():Observable<any>{
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  };

  getSpecificBrand(id:string):Observable<any>{
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
  };
}
