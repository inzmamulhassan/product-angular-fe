import { inject, Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly APIUrl = "https://fakestoreapi.com/products";
  protected http: HttpClient = inject(HttpClient)
  constructor() { 
  }

  protected productList: Product[] = [];

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.APIUrl);
  }

  getProductById(id: number) : Observable<Product> {
    return this.http.get<Product>(this.APIUrl+'/'+id);
  }

}
