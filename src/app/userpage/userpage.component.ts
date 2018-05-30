import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }
  hello(){
    console.log("yeeeeiiiiiii");
  }
}
