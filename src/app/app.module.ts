import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';

import { FullmatModule } from './fullmat/fullmat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FullmatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
