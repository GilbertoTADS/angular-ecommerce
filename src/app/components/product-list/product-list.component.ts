import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../commom/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];

  constructor(private readonly service:ProductService) { }

  ngOnInit(): void {
   this.listProducts();
  }
  listProducts(): void {
    this.service.getProducts().subscribe({ next: this.setProducts.bind(this) });
    this.service.getProducts().subscribe({ error: console.info });
    
  }
  setProducts(products: Product[]): void {
    this.products = products;
  }

}
