import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from 'src/app/config/api.config';


@Injectable()

export class ApiService {
  constructor(private http: HttpClient) {}



  public getPhotoEvent(id: any) {
    return this.get(`${apiConfig}/${id}`);
  }


  private get<T = any>(url: string, options: object = {}): Observable<T> {
    const params: HttpParams = new HttpParams(options);
    return this.http.get<T>(url, {params});
  }

}
