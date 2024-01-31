import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { ProductDescriptionComponent } from './product-description.component';
import { ProductsStore } from '../../store/product.store';
import { ProductService } from '../../services/product.service';
import { API_URL, ApiURL } from '../../config/product.config';

describe('ProductDescriptionComponent', () => {
  let component: ProductDescriptionComponent;
  let fixture: ComponentFixture<ProductDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDescriptionComponent],
      providers: [
        ProductsStore,
        ProductService,
        provideHttpClientTesting(),
        provideHttpClient(),
        provideRouter([]),
        {
          provide: API_URL,
          useValue: ApiURL,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
