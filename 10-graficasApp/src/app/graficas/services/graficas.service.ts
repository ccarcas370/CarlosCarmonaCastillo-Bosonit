import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDividido() {
    return this.getUsuariosRedesSociales()
      .pipe(
        delay(800),
        map( data => {
          const labels = Object.keys(data);
          const valores = Object.values(data);
          return {labels, valores}
        })
      )
  }

}
