import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInstructionsComponent } from './product-instructions.component';

describe('ProductInstructionsComponent', () => {
  let component: ProductInstructionsComponent;
  let fixture: ComponentFixture<ProductInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInstructionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
