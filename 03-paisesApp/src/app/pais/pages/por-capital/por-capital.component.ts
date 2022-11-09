import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  capitales: Country[] = [];

  constructor(private capitalService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    
    this.capitalService.buscarCapital(this.termino)
      .subscribe({
        next: (capital) => {
        this.capitales = capital;
      }, 
        error: (err) => {
        this.hayError = true;
        this.capitales = [];
        }
      });
  }

}
