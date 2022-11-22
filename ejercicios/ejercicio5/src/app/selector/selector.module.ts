import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponentComponent } from './selector-component/selector-component.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    SelectorComponentComponent
  ],
  exports: [
    SelectorComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SelectorModule { }
