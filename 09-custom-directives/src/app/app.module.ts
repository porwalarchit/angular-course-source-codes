import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { setBackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    setBackgroundDirective,
    HighlightDirective,
    HoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
