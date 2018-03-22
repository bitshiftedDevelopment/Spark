import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Required component imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

// Auth provider imports
import { GoogleAuthModule } from '../google-auth/google-auth.module';
import { GithubAuthModule } from '../github-auth/github-auth.module';
import { FacebookAuthModule } from '../facebook-auth/facebook-auth.module';
import { TwitterAuthModule } from '../twitter-auth/twitter-auth.module';

// Main component for export
import { MultiauthComponent } from './multiauth.component';

import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    GoogleAuthModule,
    GithubAuthModule,
    FacebookAuthModule,
    TwitterAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    AngularDraggableModule
  ],
  exports: [
    GoogleAuthModule,
    GithubAuthModule,
    FacebookAuthModule,
    TwitterAuthModule,
    MultiauthComponent
  ],
  declarations: [MultiauthComponent]
})
export class MultiauthModule { }
