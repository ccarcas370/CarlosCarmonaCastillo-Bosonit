import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  message: string = 'message:';
  newMessage: string = '';
  
  @Input() messageInChild: string = '';

  @Output() eventEmitter = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void {
  }

  service(): void {
    this.newMessage = 'message: CHILD USING SERVICE';
    this.eventEmitter.emit(this.newMessage);
  }

  property(): void {
    this.newMessage = 'message: CHILD USING INPUT PROPERTY';
    this.eventEmitter.emit(this.newMessage);
  }

  observable() : void {
    this.newMessage = 'message: CHILD USING SUBJECT';
    this.eventEmitter.emit(this.newMessage);
  }

}
