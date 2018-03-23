import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {
  constructor() { }
  @Input() title:string;
  @Input() contents:string;
  @Input() showDelete:boolean;

  ngOnInit() {
  }

}
