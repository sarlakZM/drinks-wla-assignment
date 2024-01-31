import { Component, Input, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { ProductsStore } from '../../store/product.store';

@Component({
  selector: 'app-product-tags',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './product-tags.component.html',
  styleUrl: './product-tags.component.scss'
})
export class ProductTagsComponent {
  readonly productsStore = inject(ProductsStore);
}
