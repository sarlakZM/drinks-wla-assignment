import { InjectionToken } from '@angular/core';

import * as ProductListConfigData from '@app/branding/product-list';
import * as ProductDetailConfigData from '@app/branding/product-detail';

export const PRODUCT_LIST_CONFIG_DATA = new InjectionToken<any>(
  'product-list.config'
);

export const PRODUCT_DETIAL_CONFIG_DATA = new InjectionToken<any>(
  'product-detail.config'
);

export const API_URL = new InjectionToken<any>('api.config');

export const ProductListConfig: any = { ...ProductListConfigData };
export const ProductDetailConfig: any = { ...ProductDetailConfigData };
export const ApiURL: any = {
  apiUrl: 'https://www.thecocktaildb.com/api/json/v1/1/',
};
