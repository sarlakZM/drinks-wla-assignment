import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTagsComponent } from './product-tags.component';

describe('ProductTagsComponent', () => {
  let component: ProductTagsComponent;
  let fixture: ComponentFixture<ProductTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
