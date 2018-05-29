import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../services/cliente.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: any;
  email: any;
  password: string;
  estados:any = [];
  constructor(private serviciod: ClienteService) { }

  ngOnInit() {
  }
  register(event){
    event.preventDefault();
    var cliente = {
      nombre: this.name,
      correo: this.email,
      password: this.password
    }
    this.serviciod.registerCliente(cliente).then(estado => { this.estados.push(estado) });
  }

}
