import {Component, OnInit} from '@angular/core';
import {Globals} from '../globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public globals: Globals) {
  }

  ngOnInit() {
  }

  isLogged(): boolean {
    return (this.globals.global_id_cliente > 0);
  }
}
