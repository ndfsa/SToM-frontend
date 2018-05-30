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
      const res = JSON.parse(response.text());
      if (res.id_cliente != 0){
        this.globals.global_id_cliente = res.id_cliente;
        this.globals.global_correo_cliente = res.correo;
        this.globals.global_nombre_cliente = res.nombre;
        this.goToUserPage();
      }
    });
  }
  goToUserPage(){
    return this.router.navigate(["/","userpage"])
  }

}
