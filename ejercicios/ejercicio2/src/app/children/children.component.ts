import { Component, Input, Output, EventEmitter, AfterViewChecked, OnChanges } from '@angular/core';
import { ComunicacionService } from '../shared/services/comunicacion.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements AfterViewChecked, OnChanges {

  
  mensajeServicioAlPadre: string = 'message: CHILD USING SERVICE';
  message: string = 'message:';
  newMessage: string = '';

  @Input() messageInChild: string = '';

  @Output() eventEmitter = new EventEmitter<string>(); 

  constructor(private mensajeService: ComunicacionService) { 
    this.mensajeService.mensajeAlPadreObservable
      .subscribe(mensaje => this.message = mensaje );
  }

  ngOnChanges(): void {
    this.message = this.messageInChild;
  }

  ngAfterViewChecked(): void {
      this.message = this.messageInChild;
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
