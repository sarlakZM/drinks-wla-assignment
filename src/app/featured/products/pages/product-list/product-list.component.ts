import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';

import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductList } from '../../models/product.model';
import { PRODUCT_LIST_CONFIG_DATA } from '../../config/product.config';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, MatProgressSpinnerModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers:[ProductService],
})
export class ProductListComponent {
  private productService = inject(ProductService);
  productListConfig = inject(PRODUCT_LIST_CONFIG_DATA);
  products$ : Observable<ProductList>= this.productService.getByFiltered();
}
