import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productService: ProductService = inject(ProductService);
  productList!: Product[];
  
  constructor() {
    this.productService.getAllProducts().subscribe((products) => {
      this.productList = products
    });
  }
}
