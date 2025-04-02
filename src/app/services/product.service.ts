import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../commom/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((response:Product[]) => response)
    );
  }
}
