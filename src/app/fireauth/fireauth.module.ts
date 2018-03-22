import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
//import { LoginModule } from './login/login.module';
/*import { FacebookAuthModule } from './facebook-auth/facebook-auth.module';
import { GithubAuthModule } from './github-auth/github-auth.module';
import { GoogleAuthModule } from './google-auth/google-auth.module';
import { TwitterAuthModule } from './twitter-auth/twitter-auth.module';*/
import { MultiauthModule } from './multiauth/multiauth.module';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MultiauthModule
    //LoginModule
    /*FacebookAuthModule,
    GithubAuthModule,
    GoogleAuthModule,
    TwitterAuthModule*/
  ],
  exports: [
    MultiauthModule
    //LoginModule
    /*FacebookAuthModule,
    GithubAuthModule,
    GoogleAuthModule,
    TwitterAuthModule*/
  ],
  declarations: []
})
export class FireauthModule { }
