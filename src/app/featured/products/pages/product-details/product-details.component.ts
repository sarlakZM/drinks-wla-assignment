import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProductService } from '../../services/product.service';
import { ProductTagsComponent } from '../../components/product-tags/product-tags.component';
import { ProductDescriptionComponent } from '../../components/product-description/product-description.component';
import { ProductImageComponent } from '../../components/product-image/product-image.component';
import { ProductIngredientsComponent } from '../../components/product-ingredients/product-ingredients.component';
import { ProductInstructionsComponent } from '../../components/product-instructions/product-instructions.component';
import { PRODUCT_DETIAL_CONFIG_DATA } from '../../config/product.config';
import { ProductsStore } from '../../store/product.store';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule, AsyncPipe, MatProgressSpinnerModule,
  ProductTagsComponent, ProductDescriptionComponent, ProductImageComponent,
  ProductIngredientsComponent, ProductInstructionsComponent, MatDivider],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  providers:[],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  readonly productsStore = inject(ProductsStore);
  private route = inject(ActivatedRoute);
  productDetailConfig = inject(PRODUCT_DETIAL_CONFIG_DATA);
  productId = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    // 👇 Re-fetch books whenever the value of query signal changes.
    this.productsStore.getDetailsByID(this.productId as string)
  }
}
