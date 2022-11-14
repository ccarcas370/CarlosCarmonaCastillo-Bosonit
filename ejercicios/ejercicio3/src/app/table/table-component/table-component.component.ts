import { Component, Input, OnInit, Output, EventEmitter, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Persona } from 'src/app/interfaces/interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styles: [`
    .spanButton{
      cursor: pointer;
    }
  `]
})
export class TableComponentComponent implements OnInit {

  personas: Persona[] = [
    {
      nombre: 'Carlos',
      password: '123456',
      password2: '123456',
      email: 'test1@test.com',
      promociones: true,
      pais: 'España',
      ciudad: 'Granada',
    },
    {
      nombre: 'PEDRO',
      password: '123456',
      password2: '123456',
      email: 'test2@test.com',
      promociones: true,
      pais: 'España',
      ciudad: 'JAEN',
    }
  ]

  @Output() eventEmitter = new EventEmitter<Persona>();

  constructor() { }

  ngOnInit(): void {
 
  }

  editar(i: number) {
    this.eventEmitter.emit(this.personas[i]);
  }

  borrar(i: number) {
    this.personas.splice(i, 1);
  }

}
