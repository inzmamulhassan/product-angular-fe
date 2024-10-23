import { Component, inject, Input } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productService: ProductService = inject(ProductService);
  @Input()
  product!: Product;
  route: ActivatedRoute = inject(ActivatedRoute);
  productId!: number;

  constructor() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId).subscribe((data) => {
        this.product = data;
      });
    });
  }
}
