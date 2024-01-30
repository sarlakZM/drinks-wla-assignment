import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductService } from '../../services/product.service';
import { ProductList } from '../../models/product.model';
import { ProductTagsComponent } from '../../components/product-tags/product-tags.component';
import { ProductDescriptionComponent } from '../../components/product-description/product-description.component';
import { ProductImageComponent } from '../../components/product-image/product-image.component';
import { ProductIngredientsComponent } from '../../components/product-ingredients/product-ingredients.component';
import { ProductInstructionsComponent } from '../../components/product-instructions/product-instructions.component';
import { PRODUCT_DETIAL_CONFIG_DATA } from '../../config/product.config';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule, AsyncPipe, MatProgressSpinnerModule,
  ProductTagsComponent, ProductDescriptionComponent, ProductImageComponent,
  ProductIngredientsComponent, ProductInstructionsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  providers:[ProductService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  productDetailConfig = inject(PRODUCT_DETIAL_CONFIG_DATA);

  productId = this.route.snapshot.paramMap.get('id');
  productDetails$: Observable<ProductList> = this.productService.getDeatilsByID(this.productId as string);

}
