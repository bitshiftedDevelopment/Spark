import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { TohDemoComponent } from './toh-demo/toh-demo.component';
import { AppComponent } from './app.component';

//import { FullmatModule } from './fullmat/fullmat.module';
import { FireauthModule } from  './fireauth/fireauth.module';


@NgModule({
  declarations: [
    AppComponent,
    TohDemoComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    //FullmatModule,
    FireauthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
