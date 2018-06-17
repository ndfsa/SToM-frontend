import { Component, OnInit } from '@angular/core';
import {JuegosService} from "../services/juegos.service";
import {Response} from "@angular/http";
import {Router} from "@angular/router";
//import Global = NodeJS.Global;
import { Globals } from '../globals';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {
  list = [];
  str = "";
  flag = false;
  descripcion:any;
  link:any;
  nombre:any;
  constructor(private service: JuegosService, private router: Router,private globals: Globals) { }

  ngOnInit() {
    this.getID_Juego(this.globals.global_id_juego);
  }
  get(){
    this.service.buscarJuego(this.str).subscribe((response:Response) => {
      this.list = response.json();
      // console.log(this.list[0].costo);


    });
  }
  show(){
    return this.globals.global_id_juego;
  }
  getDescripcion(){
    this.getID_Juego(this.globals.global_id_juego);
    return this.descripcion;
  }
  getLink(){
    this.getID_Juego(this.globals.global_id_juego);
    return this.link;
  }
  getName(){
    this.getID_Juego(this.globals.global_id_juego);
    return this.nombre;
  }
  getID_Juego(ID){
    event.preventDefault();

    this.service.getJuego().subscribe((response:Response) => {
      const res = JSON.parse(response.text());
      this.descripcion=res.descripcion;
      this.link=res.link;
      this.nombre=res.nombre;
    });
  }
}
