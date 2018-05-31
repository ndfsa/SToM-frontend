import { Component, OnInit } from '@angular/core';
import {Globals} from "../globals";
import {Response} from "@angular/http";
import {ClienteService} from "../services/cliente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  email: any;
  password: any;
  name: any;

  constructor(public globals: Globals, private service: ClienteService, private router: Router) { }

  ngOnInit() {
  }

  modify(){
    const cliente = {
      correo: this.email,
      password: this.password,
      nombre: this.name
    };
    this.service.modifyCliente(cliente).subscribe((response:Response) => {
      if (response.text() != "0"){
        this.globals.global_correo_cliente = cliente.correo;
        this.globals.global_nombre_cliente = cliente.nombre;
        this.goToUserPage();
      }
    });
  }
  goToUserPage(){
    return this.router.navigate(["/","userpage"])
  }

}
