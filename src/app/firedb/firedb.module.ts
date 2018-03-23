import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';

import { FiredbComponent } from './firedb.component';
import { PostcardModule } from './postcard/postcard.module';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    PostcardModule
  ],
  exports: [FiredbComponent],
  declarations: [FiredbComponent],
})
export class FiredbModule { }
