import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AsyncPipe } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Observable } from 'rxjs';
import { ProductList } from '../../models/product.model';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
