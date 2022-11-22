import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Universidad } from 'src/app/interfaces/universidad.interface';
import { BuscadorService } from 'src/app/services/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [`
    .mat-button-toggle{
    background-color: #306cee;
    color: #ffffff;
    }

    .mat-button-toggle:hover {
    background-color: transparent;
    color: #1100ff;    
    }

    .mat-button-toggle-checked{
    background-color: green;
    color: #ffffff;
    } 
  `]
})
export class BuscadorComponent implements OnInit {

  universidad!: Universidad[];
  universidadPorPais!: Universidad[];
  value!: string;

  constructor(private buscadorService: BuscadorService) { }

  ngOnInit(): void {
  }


  submit(event: any) {
    this.buscadorService.getUniversidades(event.value)
      .subscribe( lista => this.universidadPorPais = lista);
  }

  buscar() {
    this.universidad = this.universidadPorPais.filter(
      lista => lista.name.toUpperCase().includes(this.value.toUpperCase()));
  }
  
}
