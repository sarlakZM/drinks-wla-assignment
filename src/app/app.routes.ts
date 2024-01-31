import { Routes } from '@angular/router';
import {
  API_URL,
  ApiURL,
  PRODUCT_DETIAL_CONFIG_DATA,
  PRODUCT_LIST_CONFIG_DATA,
  ProductDetailConfig,
  ProductListConfig,
} from './featured/products/config/product.config';
import { ProductsStore } from './featured/products/store/product.store';
import { ProductService } from './featured/products/services/product.service';

export const routes: Routes = [
  {
    path: '',
    providers: [
      ProductsStore,
      ProductService,
      {
        provide: PRODUCT_LIST_CONFIG_DATA,
        useValue: ProductListConfig,
      },
      {
        provide: API_URL,
        useValue: ApiURL,
      },
    ],
    loadComponent: () =>
      import(
        './featured/products/pages/product-list/product-list.component'
      ).then(m => m.ProductListComponent),
  },
  {
    path: 'product-details/:id',
    providers: [
      ProductsStore,
      ProductService,
      {
        provide: PRODUCT_DETIAL_CONFIG_DATA,
        useValue: ProductDetailConfig,
      },
      {
        provide: API_URL,
        useValue: ApiURL,
      },
    ],
    loadComponent: () =>
      import(
        './featured/products/pages/product-details/product-details.component'
      ).then(m => m.ProductDetailsComponent),
  },
  {
    path: '**',
    redirectTo: '',
    //,component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];
