import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponentComponent } from './checkbox-component/checkbox-component.component';



@NgModule({
  declarations: [
    CheckboxComponentComponent
  ],
  exports: [
    CheckboxComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckboxModule { }
