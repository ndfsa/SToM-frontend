import { Component, OnInit } from '@angular/core';
import {JuegosService} from "../services/juegos.service";
import {Response} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
list = [];
str = "";
flag = false;
  constructor(private service: JuegosService, private router: Router) { }

  ngOnInit() {

  }
  get(){
    this.service.buscarJuego(this.str).subscribe((response:Response) => {
      this.list = response.json();
      // console.log(this.list[0].costo);
      this.flag = true;
      this.router.navigate(["/","buscar"]);
    });
  }

}
