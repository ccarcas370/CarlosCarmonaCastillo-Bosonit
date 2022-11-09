import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  tipologia: string = '2';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {

      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ] 

  cambiar(): void {
    this.enMayusculas = !this.enMayusculas;

    if(this.tipologia === '1') {
      this.tipologia = '2';
    } else {
      this.tipologia = '1';
    }
    
  }

  //i18nSelect
  tipologiaMapa = {
    '1': 'mayúsculas',
    '2': 'minúsculas'
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

}
