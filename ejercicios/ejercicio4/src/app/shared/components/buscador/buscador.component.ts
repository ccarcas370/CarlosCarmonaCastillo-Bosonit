import { Component, OnInit } from '@angular/core';
import { Universidad } from 'src/app/interfaces/universidad.interface';
import { BuscadorService } from 'src/app/services/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
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
    console.log(event.value);
  }

  buscar() {
    if (this.universidadPorPais) {
      console.log(this.value)
      this.universidad = this.universidadPorPais.filter(
        lista => lista.name.includes(this.value));
        console.log('1111')
        console.log(this.universidad);
      }
    else {
      return
    }
  }
  
}
