import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { ProductInstructionsComponent } from './product-instructions.component';
import { ProductsStore } from '../../store/product.store';
import { ProductService } from '../../services/product.service';
import { API_URL, ApiURL } from '../../config/product.config';

describe('ProductInstructionsComponent', () => {
  let component: ProductInstructionsComponent;
  let fixture: ComponentFixture<ProductInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInstructionsComponent],
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

    fixture = TestBed.createComponent(ProductInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
