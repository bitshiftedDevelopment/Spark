import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';

import { FullmatModule } from './fullmat/fullmat.module';
//import { FireauthModule } from  './fireauth/fireauth.module';
import { FiredbModule } from './firedb/firedb.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    //FullmatModule,
    //FireauthModule
    FiredbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
