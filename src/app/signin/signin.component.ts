import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Response} from "@angular/http";
import {ClienteService} from "../services/cliente.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: any;
  password: any;
  estados: any = [];
  constructor(private service: ClienteService, private router:Router) { }

  ngOnInit() {  }
  log(event){
    event.preventDefault();
    const cliente = {
      correo: this.email,
      password: this.password
    }
    var res;
    this.service.logCliente(cliente).subscribe((response:Response) => {
      res = JSON.parse(response.text());
      console.log(res.nombre);
    });
    console.log("response is : " + res);
  }

}
