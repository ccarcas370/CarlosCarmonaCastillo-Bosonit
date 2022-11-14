import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  private baseUrl: string = 'https://restcountries.com/v2/region/europe';

  constructor(private http: HttpClient) { }

  getPais(): Observable<Pais[]> {
    const url: string = `${this.baseUrl}?fields=name`
    return this.http.get<Pais[]>(url);
  }
}
