import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../commom/product';
import { ServiceDTO } from '../commom/serviceDTO';
import { ProductsDTO } from '../commom/ProductsDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.http.get<ServiceDTO<ProductsDTO>>(this.baseUrl).pipe(
      map((response:ServiceDTO<ProductsDTO>) => response._embedded.products)
    );
  }
}
