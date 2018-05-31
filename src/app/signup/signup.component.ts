import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../services/cliente.service';
import {Response} from "@angular/http";
import {Globals} from "../globals";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: any;
  email: any;
  password: string;
  constructor(private serviciod: ClienteService,private globals: Globals, private router: Router) { }

  ngOnInit() {
  }
  register(event){
    event.preventDefault();
    var cliente = {
      nombre: this.name,
      correo: this.email,
      password: this.password
    }
    this.serviciod.registerCliente(cliente).subscribe((response:Response) => {
      console.log(response);
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
