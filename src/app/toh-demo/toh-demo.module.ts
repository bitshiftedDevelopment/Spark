import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TohDemoComponent } from './toh-demo.component';
import { FullmatModule } from '../fullmat/fullmat.module';

@NgModule({
  imports: [
    CommonModule,
    FullmatModule
  ],
  declarations: [TohDemoComponent]
})
export class TohDemoModule { }
