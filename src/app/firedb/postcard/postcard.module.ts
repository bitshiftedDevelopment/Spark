import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PostcardComponent } from './postcard.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[PostcardComponent],
  declarations: [PostcardComponent]
})
export class PostcardModule { }
