import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ProductsStore } from '../../store/product.store';

@Component({
  selector: 'app-product-image',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.scss'
})
export class ProductImageComponent {
  readonly productsStore = inject(ProductsStore);
}
