import { Component } from '@angular/core';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SToM the cheap Steam rip-off';
  email: any;
  password: any;
  estados: any = [];
  constructor(private serviciod: ClienteService) {
  }
  // log(event){
  //   event.preventDefault();
  //   var cliente = {
  //     correo: this.email,
  //     password: this.password,
  //   }
  //   this.serviciod.logCliente(cliente);
  // }



}
