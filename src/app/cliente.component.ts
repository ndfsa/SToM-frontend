import { Component, OnInit } from '@angular/core';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'login-form',
  template: `
    <div class="login">
      <h1>SToM :)</h1>
        <input type="text" [(ngModel)]="email" name="u" placeholder="E-mail" required="required" />
        <input type="password" [(ngModel)]="password" name="u" placeholder="Password" required="required" />
        <input type="button" value="Login!" class="btn btn-primary btn-block btn-large" />
      </div>
  `
})

export class ClienteComponent implements OnInit {
  email: any;
  password: any;
  estados: any = [];
  constructor(private serviciod: ClienteService) { }

  ngOnInit() { }

}
