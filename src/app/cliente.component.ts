import {Component, OnInit} from '@angular/core';
import {ClienteService} from './services/cliente.service';

@Component({
  selector: 'login-form',
  template: `
    <div class="login">
      <h1>SToM :)</h1>
      <input type="text" [(ngModel)]="email" name="u" placeholder="E-mail" required="required"/>
      <input type="password" [(ngModel)]="password" name="u" placeholder="Password" required="required"/>
      <input type="button" value="Login!" class="btn btn-primary btn-block btn-large" (click)="get($event)"/>
    </div>
  `
})

export class ClienteComponent implements OnInit {
  email: any;
  password: any;
  estados: any = [];

  constructor(private serviciod: ClienteService) {
  }

  ngOnInit() {
  }
  get(event){
    event.preventDefault();
    const cliente = {
      id_cliente: 1,
      nombre: 'noName',
      correo: this.email,
      password: this.password,
      credito: 0
    }
    this.serviciod.getCliente(cliente).then(estado => { this.estados.push(estado) });
  }

}
