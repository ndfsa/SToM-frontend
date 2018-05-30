import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Response} from "@angular/http";
import {ClienteService} from "../services/cliente.service";
import { Globals } from '../globals';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: any;
  password: any;
  res: any;
  constructor(private service: ClienteService, private router:Router, private globals: Globals) {

  }

  ngOnInit() {  }
  log(event){
    event.preventDefault();
    const cliente = {
      correo: this.email,
      password: this.password
    };
    this.service.logCliente(cliente).subscribe((response:Response) => {
      this.res = JSON.parse(response.text());
      if (this.res.id_cliente != 0){
        this.goToUserPage();
      }
    });
  }
  goToUserPage(){
    return this.router.navigate(["/","userpage"])
  }
}
