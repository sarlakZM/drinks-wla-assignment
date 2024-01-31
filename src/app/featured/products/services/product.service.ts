import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { API_URL } from '../config/product.config';
import { ProductListModel } from '../models/product.model';

@Injectable()
export class ProductService extends BaseService<ProductListModel> {
  constructor(
    httpClient: HttpClient,
    @Inject(API_URL) private api_url: any
  ) {
    super(httpClient, api_url.apiUrl);
  }

  getByFiltered(query: string): Observable<ProductListModel> {
    this.path = `filter.php`;
    const params = new HttpParams({
      fromObject: {
        a: query,
      },
    });
    return this.get(params);
  }

  getDeatilsByID(id: string): Observable<ProductListModel> {
    this.path = `lookup.php`;
    const params = new HttpParams({
      fromObject: {
        i: id,
      },
    });
    return this.get(params);
  }
}
