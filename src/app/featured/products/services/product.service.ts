import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { API_URL } from '../config/product.config';
import { ProductList } from '../models/product.model';

@Injectable()
export class ProductService extends BaseService<ProductList> {
  constructor(
    httpClient: HttpClient,
    @Inject(API_URL) private api_url: any
  ) {
    super(httpClient, api_url.apiUrl);
  }

  getByFiltered(): Observable<ProductList> {
    this.path = `filter.php`;
    const params = new HttpParams({
      fromObject: {
        a: this.api_url.filterdData,
      },
    });
    return this.get(params);
  }

  getDeatilsByID(id: string): Observable<ProductList> {
    this.path = `lookup.php`;
    const params = new HttpParams({
      fromObject: {
        i: id,
      },
    });
    return this.get(params);
  }
}
