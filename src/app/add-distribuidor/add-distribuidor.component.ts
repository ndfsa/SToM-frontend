import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ClienteService} from "../services/cliente.service";


@Component({
  selector: 'app-add-distribuidor',
  templateUrl: './add-distribuidor.component.html',
  styleUrls: ['./add-distribuidor.component.css']
})
export class AddDistribuidorComponent implements OnInit {

  nombre: any;
  telefono: any;
  email: any;
  direccion: any;
  constructor(private serviciod: ClienteService, private router: Router) { }

  ngOnInit() {
  }
  registerDistrib(event){
    event.preventDefault();
    var distribuidor = {
      nombre: this.nombre,
      correo: this.email,
      direccion: this.direccion,
      telefono: this.telefono
    }
    this.serviciod.registerCliente(distribuidor);
  }
}
