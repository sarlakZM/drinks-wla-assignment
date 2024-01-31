import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { PRODUCT_LIST_CONFIG_DATA } from '../../config/product.config';
import { ProductsStore } from '../../store/product.store';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, MatProgressSpinnerModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers:[],
})
export class ProductListComponent {
  productListConfig = inject(PRODUCT_LIST_CONFIG_DATA);
  readonly productsStore = inject(ProductsStore);

  ngOnInit(): void {
    // 👇 Re-fetch products whenever the value of query signal changes.
    this.productsStore.getByFiltered('Alcoholic')
  }
}
