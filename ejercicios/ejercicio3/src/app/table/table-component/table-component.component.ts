import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Persona } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styles: [`
    .spanButton{
      cursor: pointer;
    }
  `]
})
export class TableComponentComponent implements OnChanges {

  personas: Persona[] = [{
    nombre: 'Carlos',
    password: '123456',
    password2: '123456',
    email: 'carlos@test.com',
    promociones: false,
    pais: 'España',
    ciudad: 'Granada'
  }]

  @Output() eventEmitter = new EventEmitter<Persona>();
  @Input() persona: Persona = {
    nombre: '',
    password: '',
    password2: '',
    email: '',
    promociones: false,
    pais: '',
    ciudad: ''
  };

  sw: boolean = false;
  numero: number = 0;

  constructor() { }
  
  ngOnChanges(): void {

    setTimeout( () => {
      if(this.persona.nombre.trim().length > 0 && this.sw !== true) {
        this.personas.push(this.persona);
      }
      if(this.sw) {
        const numero: number = this.editar(this.numero);
        this.personas[numero] = this.persona;
        this.sw = false;
      }
    }, 0)

  }

  editar(i: number): number {
    this.eventEmitter.emit(this.personas[i]);
    this.sw = true;
    this.numero = i;
    return this.numero;
  }

  borrar(i: number) {
    this.personas.splice(i, 1);
  }

}
