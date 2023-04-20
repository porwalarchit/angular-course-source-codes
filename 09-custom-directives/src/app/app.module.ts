import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { setBackgroundDirective } from './CustomDirective/setbackground.directive';

@NgModule({
  declarations: [
    AppComponent,
    setBackgroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
