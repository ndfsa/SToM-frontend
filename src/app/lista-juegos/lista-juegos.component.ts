import { Component, OnInit } from '@angular/core';
import {JuegosService} from "../services/juegos.service";
import {Response} from "@angular/http";
import {Router} from "@angular/router";
//import Global = NodeJS.Global;
import { Globals } from '../globals';
import {ClienteService} from "../services/cliente.service";

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
  link:string;
  nombre:any;
  constructor(private cservice: ClienteService,private service: JuegosService, private router: Router,public globals: Globals) { }

  ngOnInit() {
    this.getID_Juego(this.globals.global_id_juego);
  }
  getID_Juego(ID){
    this.service.getJuego().subscribe((response:Response) => {
      const res = JSON.parse(response.text());
      this.descripcion=res.descripcion;
      this.link=res.linkImagen;
      this.nombre=res.nombre;
    });
  }
  devolver(id){
    this.service.devolverJuego(id).subscribe((response:Response) => {
      this.cservice.getTodosJuegos(this.globals.global_id_cliente).subscribe((response:Response) => {
        this.globals.global_juegos = response.json();
        console.log(this.globals.global_juegos);
      });
      this.router.navigate(["/","listaJuegos"])
    });
  }
}
