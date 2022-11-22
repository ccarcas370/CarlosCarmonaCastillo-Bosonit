import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[custom-color]'
})
export class CustomColorDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  private _color: string = '';

  @Input() set color(valor: string) {
    console.log('estoy en directiva',this._color)
    this._color = valor;
    this.setColor();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
   }
  ngOnInit(): void {
    this.setColor();
  }

  setColor() {
    console.log('hola1')
    if(this._color === 'rojo') {
      console.log('ESTOY AQUI ROJO')
      this.htmlElement.nativeElement.classList.add('ul.semaforo li.rojo');
      this.htmlElement.nativeElement.classList.remove('ul.semaforo li.amarillo');
      this.htmlElement.nativeElement.classList.remove('ul.semaforo li.verde');
    } else if(this._color === 'amarillo'){
      console.log('ESTOY AQUI AMARILLO')
      this.htmlElement.nativeElement.classList.add('ul.semaforo li.amarillo');
      this.htmlElement.nativeElement.classList.remove('ul.semaforo li.rojo');
      this.htmlElement.nativeElement.classList.remove('ul.semaforo li.verde');
    } else if(this._color === 'verde'){
      console.log('ESTOY AQUI VERDE')
      this.htmlElement.nativeElement.classList.add('ul.semaforo li.verde');
      this.htmlElement.nativeElement.classList.remove('ul.semaforo li.rojo');
      this.htmlElement.nativeElement.classList.remove('ul.semaforo li.amarillo');
    } else {
      this.htmlElement.nativeElement.classList.remove('ul.semaforo li.verde');
      this.htmlElement.nativeElement.classList.remove('ul.semaforo li.rojo');
      this.htmlElement.nativeElement.classList.remove('ul.semaforo li.amarillo');
    }
  }

}
