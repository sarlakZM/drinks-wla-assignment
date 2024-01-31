import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductsStore } from './product.store';

describe('ProductsStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsStore, provideMockStore({})],
    });
  });

  it('should be created', inject([ProductsStore], (service: typeof ProductsStore) => {
    expect(service).toBeTruthy();
  }));
});