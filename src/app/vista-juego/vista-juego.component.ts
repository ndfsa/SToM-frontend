import { Component, OnInit } from '@angular/core';
import {Globals} from "../globals";
import {Response} from "@angular/http";
import {JuegosService} from "../services/juegos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vista-juego',
  templateUrl: './vista-juego.component.html',
  styleUrls: ['./vista-juego.component.css']
})
export class VistaJuegoComponent implements OnInit {
  list = [];
  str = "";
  flag = false;
  descripcion:any;
  link:string;
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

    return this.descripcion;
  }
  getLink(){
    console.log(this.link);
    return this.link;
  }
  getName(){

    return this.nombre;
  }
  getID_Juego(ID){
    this.service.getJuego().subscribe((response:Response) => {
      const res = JSON.parse(response.text());
      this.descripcion=res.descripcion;
      this.link=res.linkImagen;
      this.nombre=res.nombre;
    });
  }
}
