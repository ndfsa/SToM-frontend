import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../services/cliente.service';

@Component({
  selector: 'signup-form',
  template: `
    <div class="login">
      <h1>Welcome!</h1>
      <input type="text" [(ngModel)]="name" name="u" placeholder="Name" required="required"/>
      <input type="text" [(ngModel)]="email" name="u" placeholder="E-mail" required="required"/>
      <input type="password" [(ngModel)]="password" name="u" placeholder="Password" required="required"/>
      <input type="button" value="Register!" class="btn btn-primary btn-block btn-large" (click)="register($event)"/>
    </div>
  `
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
