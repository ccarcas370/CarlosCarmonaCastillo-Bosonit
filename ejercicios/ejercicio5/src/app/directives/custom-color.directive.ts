import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[customColor]'
})
export class CustomColorDirective {

  htmlElement: ElementRef<HTMLElement>;
  private _color: string = '';

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
   }

  setColor() {
    if(this._color == 'rojo') {
      console.log('ESTOY AQUI ROJO')
      this.htmlElement.nativeElement.classList.remove('li.amarillo');
      this.htmlElement.nativeElement.classList.remove('li.verde');
    } else if(this._color === 'amarillo'){
      console.log('ESTOY AQUI AMARILLO')
      this.htmlElement.nativeElement.classList.remove('li.rojo');
      this.htmlElement.nativeElement.classList.remove('li.verde');
    } else if(this._color === 'verde'){
      console.log('ESTOY AQUI VERDE')
      this.htmlElement.nativeElement.classList.remove('li.rojo');
      this.htmlElement.nativeElement.classList.remove('li.amarillo');
    }
  }

}
