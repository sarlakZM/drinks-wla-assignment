import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DebugElement } from '@angular/core';

import { ProductCardComponent } from './product-card.component';
import { Product } from '../../models/product.model';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  const mockProductResult: Product = {"strDrink":"Almond Chocolate Coffee","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/jls02c1493069441.jpg","idDrink":"16082"};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
      providers:[provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.productData = mockProductResult;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should showcase drink name', () => {
    expect(component).toBeTruthy();
    const productDe: DebugElement = fixture.debugElement;
    const productEl: HTMLElement = productDe.nativeElement;
    const p = productEl.querySelector('p')!;
    expect(p.textContent?.trim()).toEqual('Almond Chocolate Coffee');
  });

});
