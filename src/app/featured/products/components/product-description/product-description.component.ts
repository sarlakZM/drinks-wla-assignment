import { Component, inject } from '@angular/core';
import { ProductsStore } from '../../store/product.store';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent {
  readonly productsStore = inject(ProductsStore);
}
