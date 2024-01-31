import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { ProductDetials, ProductList } from '../models/product.model';
import { computed, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

type ProductsState = {
  products: ProductList;
  productDetails: ProductList;
  isLoading: boolean;
};

const initialState: ProductsState = {
  products: { 'drinks' : []},
  productDetails: { 'drinks' : []},
  isLoading: false,
};

export const ProductsStore = signalStore(
  withState<ProductsState>(initialState),
  withComputed(({ products, productDetails }) => ({
    getProducts: computed(() => products()), 
    getProductDetails: computed(() => productDetails()), 
    selectedProductDetailsImage: computed(() => productDetails().drinks.at(0)?.strDrinkThumb),
    selectedProductDetailsDescription: computed(() => productDetails().drinks.at(0)?.strDrink),
    selectedProductDetailsTags: computed(() => productDetails().drinks.at(0)?.strTags),
    selectedProductDetailsInstructions: computed(() =>{
    const detail = productDetails().drinks.at(0);
      return {
        strInstructions: detail?.strInstructions,
        strInstructionsES: detail?.strInstructionsES,
        strInstructionsDE: detail?.strInstructionsDE,
        strInstructionsFR: detail?.strInstructionsFR,
        "strInstructionsZH-HANS": detail?.['strInstructionsZH-HANS'],
        "strInstructionsZH-HANT": detail?.['strInstructionsZH-HANT']
      }

    }),
    selectedProductDetailsIngredients: computed(() =>{
      const details = productDetails().drinks.at(0) as ProductDetials;
      const ingredients = details && Object.entries(details).filter(([key,value]) => key && value && key.includes('strIngredient')).map( row => row.at(1) )
      return ingredients ?? []
    }),
  })),
  withMethods((store, productService = inject(ProductService)) => ({
    getByFiltered: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap( (query) => {
          return productService.getByFiltered(query).pipe(
            tapResponse({
              next: (products) => patchState(store, { products }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
    getDetailsByID: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((query) => {
          return productService.getDeatilsByID(query).pipe(
            tapResponse({
              next: (productDetails) => patchState(store, { productDetails }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
  }))
);