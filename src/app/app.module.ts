import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullmatModule } from './fullmat/fullmat.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullmatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
