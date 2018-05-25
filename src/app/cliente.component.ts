import {Component, OnInit} from '@angular/core';
import {ClienteService} from './services/cliente.service';
import {a} from '@angular/core/src/render3';
import {Router} from '@angular/router';

@Component({
  selector: 'login-form',
  template: `
    <div class="login">
      <h1>SToM :)</h1>
      <input type="text" [(ngModel)]="email" name="u" placeholder="E-mail" required="required"/>
      <input type="password" [(ngModel)]="password" name="u" placeholder="Password" required="required"/>
      <input type="button" value="Login!" class="btn btn-primary btn-block btn-large" (click)="log($event)"/>
    </div>
  `
})

export class ClienteComponent implements OnInit {
  email: any;
  password: any;
  estados: any = [];
  constructor(private serviciod: ClienteService, private router:Router) {
  }

  ngOnInit() {
    this.cargar();
  }
  log(event){
    event.preventDefault();
    var cliente = {
      correo: this.email,
      password: this.password
    }
    this.serviciod.logCliente(cliente).then(estado => { this.estados.push(estado) });
  }

  cargar(): void {

  }
}
