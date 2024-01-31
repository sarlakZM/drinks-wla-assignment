import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import {
  API_URL,
  ApiURL,
  PRODUCT_LIST_CONFIG_DATA,
  ProductListConfig,
} from '../../config/product.config';
import { ProductsStore } from '../../store/product.store';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      providers: [
        ProductService,
        provideHttpClientTesting(),
        provideHttpClient(),
        ProductsStore,
        {
          provide: PRODUCT_LIST_CONFIG_DATA,
          useValue: ProductListConfig,
        },
        {
          provide: API_URL,
          useValue: ApiURL,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
