import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DistribuidorService} from "../distribuidor.service";
import {Response} from "@angular/http";


@Component({
  selector: 'app-add-distribuidor',
  templateUrl: './add-distribuidor.component.html',
  styleUrls: ['./add-distribuidor.component.css']
})
export class AddDistribuidorComponent implements OnInit {

  nombre: any;
  telefono: any;
  email: any;
  direccion: any;
  constructor(private distrib: DistribuidorService, private router: Router) { }

  ngOnInit() {
  }
  registerDistrib(event){
    event.preventDefault();
    var distribuidor = {
      nombre: this.nombre,
      correo: this.email,
      direccion: this.direccion,
      telefono: this.telefono
    }
    this.distrib.addDistribuidor(distribuidor).subscribe((response:Response) => {
      console.log(response.text());
      if (response.toString()!="0"){
          this.goDistribuidor();
      }
    });
  }

  goDistribuidor(){
    return this.router.navigate(["/","distribuidor"])
  }

}
