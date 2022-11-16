import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private messageAlHijo = new Subject<string>();
  private messageAlPadre = new Subject<string>();

  mensajeAlHijoObservable = this.messageAlHijo.asObservable();
  mensajeAlPadreObservable = this.messageAlPadre.asObservable();

  constructor() { }

  comunicacionHijoPadre(mensaje: string) {
    this.messageAlHijo.next(mensaje);
  }

  comucicacionPadreHijo(mensaje: string) {
    this.messageAlPadre.next(mensaje);
  }

  mensajeObservableAlPadre() {
    return this.messageAlHijo.next('message: CHILD USING SUBJECT');
  }

  mensajeObservableAlHijo() {
    return this.messageAlPadre.next('message: PARENT USING SUBJECT');
  }

  
  

}
