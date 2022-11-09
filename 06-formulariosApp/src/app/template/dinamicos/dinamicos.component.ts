import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Carlos',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear',
      },
      {
        id: 2,
        nombre: 'Death Stranding'
      }
  ]
  }

  guardar() {
    console.log('Formulario guardado');
  }

  eliminar(i: number) {
    this.persona.favoritos.splice(i, 1);
  }

  agregarJuego() {

    if(this.nuevoJuego.trim().length > 0) {

      const valorUltimoId = this.persona.favoritos[this.persona.favoritos.length - 1]

      const nuevoFavorito: Favorito = {
        id: valorUltimoId.id + 1,
        nombre: this.nuevoJuego
      }
      this.persona.favoritos.push({...nuevoFavorito});
      this.nuevoJuego = '';
    }
    this.nuevoJuego = '';
  }
 
}
