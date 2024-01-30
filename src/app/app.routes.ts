import { Routes } from '@angular/router';
import { API_URL, ApiURL, PRODUCT_DETIAL_CONFIG_DATA, PRODUCT_LIST_CONFIG_DATA, ProductDetailConfig, ProductListConfig } from './featured/products/config/product.config';

export const routes: Routes = [
    {
        path: '',
        providers: [
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
