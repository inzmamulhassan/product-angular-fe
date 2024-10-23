import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input()
  product!: Product;
  
}
