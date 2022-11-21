import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckboxModule } from './checkbox/checkbox.module';
import { SelectorModule } from './selector/selector.module';
import { CustomColorDirective } from './directives/custom-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomColorDirective
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    SelectorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
