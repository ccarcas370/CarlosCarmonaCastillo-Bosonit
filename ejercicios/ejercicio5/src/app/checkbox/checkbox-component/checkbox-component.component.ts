import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-component',
  templateUrl: './checkbox-component.component.html',
  styles: [
  ]
})
export class CheckboxComponentComponent {

  mensaje1: string = 'Encendido / ';
  mensaje2: string = 'Apagado';
  sw: boolean = false;
  checkbox = document.getElementById('onOff');

  constructor() { }

  cambiarValor(): boolean {
    if(this.sw === false) {
      this.sw = false;
      return this.sw;
    } else {
      this.sw = true;
      return this.sw;
    }
  }

}