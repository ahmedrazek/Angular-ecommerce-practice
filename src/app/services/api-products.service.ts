import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(
    private httpClient: HttpClient,
    private UserAuthService: UserAuthService
  ) {}

  getAllProducts(): Observable<Iproduct[]> {
    console.log('hello');

    return this.httpClient.get<Iproduct[]>(
      `${environment.baseUrl}/products`
      // , {
      // headers: new HttpHeaders({
      //   authorization: this.UserAuthService.getToken(),
      // }),
      // }
    );
  }
  getProductById(id: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }
  getProductsByCatId(catId: number): Observable<Iproduct[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('categoryId', catId);
    // searchParams = searchParams.append('limit', 5);
    return this.httpClient.get<Iproduct[]>(
      `${environment.baseUrl}/products`
      // , {
      // // params: new HttpParams().set('categoryId', catId),
      // params: searchParams,
      // }
    );
  }
  addProduct(newProd: Iproduct): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(
      `${environment.baseUrl}/products`,
      JSON.stringify(newProd)
    );
  }
  deleteProduct(prodId: string): Observable<Iproduct> {
    return this.httpClient.delete<Iproduct>(
      `${environment.baseUrl}/products/${prodId}`
    );
  }
  updateProduct(prodId: string, prod: Iproduct): Observable<Iproduct> {
    return this.httpClient.patch<Iproduct>(
      `${environment.baseUrl}/products/${prodId}`,
      prod
    );
  }
}
