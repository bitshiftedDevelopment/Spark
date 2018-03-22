import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'fireauth-google-login',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.scss']
})
export class GoogleAuthComponent implements OnInit {

  constructor(private angularAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login(){
    this.angularAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res =>{
      console.log('user info is ', res);
    });
  }

}
