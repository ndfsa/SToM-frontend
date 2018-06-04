import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  ID_Distribuidor:any;
  name:any;
  estado:any;
  costo:any;
  version:any;
  categoria:any;

  constructor() { }

  ngOnInit() {
  }

}
