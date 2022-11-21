import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponentComponent } from './selector-component/selector-component.component';
import { MatSelectModule } from '@angular/material/select';
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
    MatSelectModule,
    FormsModule
  ]
})
export class SelectorModule { }
