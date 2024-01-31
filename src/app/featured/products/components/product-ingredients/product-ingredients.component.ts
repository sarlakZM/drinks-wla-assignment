import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { ProductsStore } from '../../store/product.store';

@Component({
  selector: 'app-product-ingredients',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './product-ingredients.component.html',
  styleUrl: './product-ingredients.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductIngredientsComponent {
  readonly productsStore = inject(ProductsStore);
}
