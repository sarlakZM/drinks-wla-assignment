import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from '../../services/product.service';
import { API_URL, ApiURL, PRODUCT_DETIAL_CONFIG_DATA, ProductDetailConfig } from '../../config/product.config';



describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsComponent],
      providers: [ProductService,
        provideHttpClientTesting(),
        provideHttpClient(),
        provideRouter([]),
        {
          provide: PRODUCT_DETIAL_CONFIG_DATA,
          useValue: ProductDetailConfig,
        },
        {
          provide: API_URL,
          useValue: ApiURL,
        }],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
