import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'fireauth-facebook-login',
  templateUrl: './facebook-auth.component.html',
  styleUrls: ['./facebook-auth.component.scss']
})
export class FacebookAuthComponent implements OnInit {

  constructor(private angularAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login(){
    this.angularAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res =>{
      console.log('user info is ', res);
    });
  }

}
