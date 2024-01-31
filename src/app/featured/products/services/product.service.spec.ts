import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';
import { GENERAL_CONFIG_DATA, GeneralConfig } from 'src/app/core/config/general.config';
import { ProductList } from '../models/product.model';
import { API_URL, ApiURL } from '../config/product.config';



describe('ProductService', () => {
  let service: ProductService;
  const mockProductResult: ProductList = {drinks:[{"strDrink":"Almond Chocolate Coffee","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/jls02c1493069441.jpg","idDrink":"16082"}]};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        {
          provide: GENERAL_CONFIG_DATA,
          useValue: GeneralConfig,
        },
        {
          provide: API_URL,
          useValue: ApiURL,
        }
      ],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get drinks prosucts by filter', async () => {
    const spyCreate: jasmine.Spy = spyOn(
      service,
      'getByFiltered'
    ).and.returnValue(of(mockProductResult));
    service.getByFiltered('Alcoholic').subscribe(result => {
      expect(result).toBe(mockProductResult);
    });

    expect(spyCreate).toHaveBeenCalled();
  });
});
