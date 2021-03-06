import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {Globals} from '../globals';
import {Router} from '@angular/router';
import {ClienteService} from '../services/cliente.service';
import {JuegosService} from '../services/juegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  id_juego:any;
  ID_Distribuidor:any;
  name:any;
  estado:any;
  costo:any;
  version:any;
  categoria:any;
  descripcion : any;
  linkImagen : any;

  constructor(private serviciod: JuegosService,private globals: Globals, private router: Router) { }

  ngOnInit() {
  }
  register(event){
    event.preventDefault();
    var juego = {
      id_juego: this.id_juego,
      id_distribuidor: this.ID_Distribuidor,
      nombre: this.name,
      estado: this.estado,
      categoria: this.categoria,
      costo:this.costo,
      version:this.version,
      descripcion:this.descripcion,
      linkImagen:this.linkImagen
    }
    this.serviciod.registerGame(juego).subscribe((response:Response) => {
      console.log(response);
      const res = JSON.parse(response.text());

      this.goToGamesPage();

    });
  }
  goToGamesPage(){
    return this.router.navigate(["/","home"])
  }

}
