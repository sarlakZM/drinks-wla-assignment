import { Component, Input, inject } from '@angular/core';
import {MatListModule} from '@angular/material/list';

import { ProductsStore } from '../../store/product.store';

@Component({
  selector: 'app-product-instructions',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './product-instructions.component.html',
  styleUrl: './product-instructions.component.scss'
})
export class ProductInstructionsComponent {
  readonly productsStore = inject(ProductsStore);
}
