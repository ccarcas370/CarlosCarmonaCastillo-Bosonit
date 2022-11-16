import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../shared/services/comunicacion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message: string = 'message:';
  mensajeServicioAlHijo: string = 'message: PARENT USING SERVICE';
  newMessage: string = '';

  constructor(private mensajeService: ComunicacionService) { 
    this.mensajeService.mensajeAlHijoObservable
      .subscribe(mensaje => this.message = mensaje);
  }

  ngOnInit(): void {
  }

  service() {
    this.mensajeService.comucicacionPadreHijo(this.mensajeServicioAlHijo);
  }

  property() {
    this.newMessage = 'message: PARENT USING INPUT PROPERTY';
  }

  observable() {
    this.mensajeService.mensajeObservableAlHijo();
  }

  botonSeleccionado(messageChild: string) {
    this.message = messageChild;
  }

}
