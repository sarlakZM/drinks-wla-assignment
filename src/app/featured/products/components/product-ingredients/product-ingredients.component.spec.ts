import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { ProductIngredientsComponent } from './product-ingredients.component';
import { ProductsStore } from '../../store/product.store';
import { ProductService } from '../../services/product.service';
import { API_URL, ApiURL } from '../../config/product.config';

describe('ProductIngredientsComponent', () => {
  let component: ProductIngredientsComponent;
  let fixture: ComponentFixture<ProductIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductIngredientsComponent],
      providers:[ ProductsStore, ProductService,
        provideHttpClientTesting(),
        provideHttpClient(),
        provideRouter([]),
        {
          provide: API_URL,
          useValue: ApiURL,
        }
       ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
