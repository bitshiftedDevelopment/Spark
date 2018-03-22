import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'fireauth-twitter-login',
  templateUrl: './twitter-auth.component.html',
  styleUrls: ['./twitter-auth.component.scss']
})
export class TwitterAuthComponent implements OnInit {

  constructor(private angularAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login(){
    this.angularAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(res =>{
      console.log('user info is ', res);
    });
  }

}
