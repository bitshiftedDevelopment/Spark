import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'fireauth-github-login',
  templateUrl: './github-auth.component.html',
  styleUrls: ['./github-auth.component.scss']
})
export class GithubAuthComponent implements OnInit {

  constructor(private angularAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login(){
    this.angularAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(res =>{
      console.log('user info is ', res);
    });
  }

}
