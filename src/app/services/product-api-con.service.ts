import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../DataModels/product.interface';
 
@Injectable({
  providedIn: 'root'
})
export class ProductApiConService {
  url:string = env.apiURL;
  constructor( private http:HttpClient) { }
  
  
  getMainPageData():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.url}/category/electronics`);
  }
  getAllProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(this.url);
  }
  getSpecificProducts(category:string):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.url}/category/${category}`);
  }
  getSortedProducts(sortMethod:string ,category:string|null):Observable<Array<Product>>{
    if(category){
      return this.http.get<Array<Product>>(`${this.url}/category/${category}?sort=${sortMethod}`);
    }else{
      return this.http.get<Array<Product>>(`${this.url}?sort=${sortMethod}`);
    }
    
  }

  getProduct(id:string):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}
