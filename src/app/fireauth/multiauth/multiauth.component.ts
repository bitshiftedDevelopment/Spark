import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'multiauth',
  templateUrl: './multiauth.component.html',
  styleUrls: ['./multiauth.component.scss']
})

export class MultiauthComponent implements OnInit {
  constructor() { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;

  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };

  ngOnInit() {
  }

  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }

}
