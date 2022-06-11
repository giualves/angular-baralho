import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassNamePorNaipePipe } from './pipes/class-name-por-naipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClassNamePorNaipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
