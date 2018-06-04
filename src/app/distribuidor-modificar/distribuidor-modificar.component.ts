import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {Globals} from '../globals';
import {DistribuidorService} from '../distribuidor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-distribuidor-modificar',
  templateUrl: './distribuidor-modificar.component.html',
  styleUrls: ['./distribuidor-modificar.component.css']
})
export class DistribuidorModificarComponent implements OnInit {

  id:any;
  correo:any;
  telefono:any;
  direccion:any;
  nombre:any;

  constructor(private service: DistribuidorService, private router:Router, private globals: Globals) { }

  ngOnInit() {
  }

  editar(){
    var distribuidor = {
      nombre: this.nombre,
      correo: this.correo,
      direccion: this.direccion,
      telefono: this.telefono
    }
    this.service.editarDistribuidor(distribuidor,this.id).subscribe((response:Response) => {
      console.log(response.text());
      if (response.text() != "0"){
        this.globals.signOutReset();
        this.goDistribuidor();
      }
    });
  }
  goDistribuidor(){
    return this.router.navigate(["/","distribuidor"])
  }

}
