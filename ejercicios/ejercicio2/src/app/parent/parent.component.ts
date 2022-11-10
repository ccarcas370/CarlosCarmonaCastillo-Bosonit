import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message: string = 'message:';
  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  service(): string {
    this.newMessage = 'message: PARENT USING SERVICE';
    return this.newMessage;
  }

  property(): string {
    this.newMessage = 'message: PARENT USING INPUT PROPERTY';
    return this.newMessage;
  }

  observable() : string {
    this.newMessage = 'message: PARENT USING SUBJECT';
    return this.newMessage;
  }

  botonSeleccionado(messageChild: string) {
    this.message = messageChild;
  }

}
