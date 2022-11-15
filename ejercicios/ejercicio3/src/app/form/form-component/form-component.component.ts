import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Pais } from 'src/app/interfaces/interface';
import { PaisServiceService } from 'src/app/services/pais-service.service';
import { Persona } from '../../interfaces/interface';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styles: [`
    label {
      font-size: 20px;
      font-weigth: bold;
      font-family: Georgia, serif;
    }

    .content {
      display: grid;
      grid-template-columns: 0.25fr 0.05fr 0.7fr;
      height: 100vh;
      margin: 20px;
    }

    .separator{
      margin-top: 15px;
    }
  `]
})

export class FormComponentComponent implements OnInit {

  sw: boolean = true;
  contador: number = 2;
  emailPattern: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}";

  miFormulario: FormGroup<Persona | any> = this.fb.group ({
    nombre: ['', Validators.required],
    password: ['',Validators.required ],
    password2: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    promociones: [false],
    pais: ['', Validators.required],
    ciudad: ['', Validators.required]
  }, {
    validators: [this.camposIguales('password', 'password2')]
  });

  paises: Pais[] = [];
  persona: Persona = {
    nombre: '',
    password: '',
    password2: '',
    email: '',
    promociones: false,
    pais: '',
    ciudad: ''
  };

  constructor(private fb: FormBuilder,
              private ps: PaisServiceService) { }



  ngOnInit(): void {
    this.ps.getPais()
      .subscribe( pais => this.paises = pais )
  }

  guardar() {
    if(this.sw === true) {
      this.persona = this.miFormulario.value;
      this.miFormulario.reset();
    } else {
      this.persona = this.miFormulario.value;
      this.miFormulario.reset();
      this.sw = true;
    }
  }

  filaSeleccionada(persona: Persona) {
    if(this.contador % 2 === 0) {
      this.sw = false;
      this.miFormulario.controls['nombre'].setValue(persona.nombre);
      this.miFormulario.controls['password'].setValue(persona.password);
      this.miFormulario.controls['password2'].setValue(persona.password2);
      this.miFormulario.controls['email'].setValue(persona.email);
      this.miFormulario.controls['promociones'].setValue(persona.promociones);
      this.miFormulario.controls['pais'].setValue(persona.pais);
      this.miFormulario.controls['ciudad'].setValue(persona.ciudad);
    }
    this.contador ++;
  }

  controlarError(campo: string) {
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].errors
  }

  camposIguales(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if(pass1 !== pass2) { 
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true };
      }

      formGroup.get(campo2)?.setErrors(null);
      return null;
    }

  }

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.['required']) {
      return 'El email es obligatorio';
    } else if(errors?.['pattern']) {
      return 'El formato del email no es válido';
    } return '';
  }

}
