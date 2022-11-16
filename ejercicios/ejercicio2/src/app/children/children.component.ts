import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ComunicacionService } from '../shared/services/comunicacion.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  
  mensajeServicioAlPadre: string = 'message: CHILD USING SERVICE';
  newMessage: string = '';
  
  @Input() message: string = 'message:';

  @Output() eventEmitter = new EventEmitter<string>(); 

  constructor(private mensajeService: ComunicacionService) { 
    this.mensajeService.mensajeAlPadreObservable
      .subscribe(mensaje => this.message = mensaje );
  }

  ngOnInit(): void {
  }

  service(): void {
    this.mensajeService.comunicacionHijoPadre(this.mensajeServicioAlPadre);
  }

  property(): void {
    this.newMessage = 'message: CHILD USING INPUT PROPERTY';
    this.eventEmitter.emit(this.newMessage);
  }

  observable() : void {
    this.mensajeService.mensajeObservableAlPadre();
  }

}
