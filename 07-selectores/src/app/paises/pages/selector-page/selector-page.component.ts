import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall, Pais } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  });

  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: PaisSmall[] = [];

  cargando: boolean = false;

  constructor(private fb: FormBuilder,
              private ps: PaisesService) { }

  ngOnInit(): void {
    
    this.regiones = this.ps.regiones;

    //Region change
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( (_) => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        switchMap( region => this.ps.getPaisesPorRegion(region) )
      )
      .subscribe( paises => {
        this.paises = paises;
        this.cargando = false;
      });

      //Country change
      this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( (_)  => {
            this.fronteras = [];
            this.miFormulario.get('frontera')?.reset('');
            this.cargando = true;
          }),
          switchMap( codigo => this.ps.getPaisPorCodigo(codigo) ),
          switchMap( pais => this.ps.getPaisesPorFrontera(pais?.borders!) )
        )
        .subscribe( paises => {
          this.fronteras = paises;
          this.cargando = false;
        });
  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
