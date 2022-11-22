import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[custom-color]'
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
    if(this._color === 'rojo') {
      this.htmlElement.nativeElement.classList.replace('rojo', 'rojo2');
      this.htmlElement.nativeElement.classList.replace('amarillo2', 'amarillo');
      this.htmlElement.nativeElement.classList.replace('verde2', 'verde');
    } else if(this._color === 'amarillo'){
      this.htmlElement.nativeElement.classList.replace('amarillo', 'amarillo2');
      this.htmlElement.nativeElement.classList.replace('rojo2', 'rojo');
      this.htmlElement.nativeElement.classList.replace('verde2', 'verde');
    } else if(this._color === 'verde'){
      this.htmlElement.nativeElement.classList.replace('verde', 'verde2');
      this.htmlElement.nativeElement.classList.replace('rojo2', 'rojo');
      this.htmlElement.nativeElement.classList.replace('amarillo2', 'amarillo');
    }
  }

}
