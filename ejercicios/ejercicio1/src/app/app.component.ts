import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .message {
      width: 500px; 
      height: 150px; 
      display: flex;
      align-items: center;
      background-color: rgb(152, 241, 10);
      border: 3px solid rgb(11, 9, 0);
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      justify-content: center; 
      font-size: 25px;
      color: blue;
  }
  `]
})
export class AppComponent {
  title = 'ejercicio1';
  accion: boolean = false;
}
