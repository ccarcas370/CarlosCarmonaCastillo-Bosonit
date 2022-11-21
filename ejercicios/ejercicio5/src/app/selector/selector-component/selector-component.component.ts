import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-selector-component',
  templateUrl: './selector-component.component.html',
  styles: [
  ]
})
export class SelectorComponentComponent implements OnInit {

  @Output() colorEnviado = new EventEmitter<string>();
  color: string = '';
  colorSeleccionado: string  = 'Seleccione una opción';

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.color = this.colorSeleccionado;
    this.colorEnviado.emit(this.color);
  }

}
