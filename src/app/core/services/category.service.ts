import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }
  baseUrl:string=environment.baseUrl;

  getCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/categories`)
  }

  getSpecificCategory(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/categories/${id}`)
  }
}
