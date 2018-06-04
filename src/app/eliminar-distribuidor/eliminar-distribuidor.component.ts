import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Response} from "@angular/http";
import {ClienteService} from "../services/cliente.service";
import { Globals } from '../globals';
import {SigninComponent} from '../signin/signin.component';
import {DistribuidorService} from '../distribuidor.service';

@Component({
  selector: 'app-eliminar-distribuidor',
  templateUrl: './eliminar-distribuidor.component.html',
  styleUrls: ['./eliminar-distribuidor.component.css']
})
export class EliminarDistribuidorComponent implements OnInit {

  id:any;
  constructor(private service: DistribuidorService, private router:Router, private globals: Globals) { }

  ngOnInit() {  }

  deleteDistribuidor(){
      this.service.deleteDistribuidor(this.id).subscribe((response:Response) => {
        console.log(response.text());
        if (response.text() != "0"){
          this.globals.signOutReset();
          this.goDistribuidor();
        }
      });
    }
    goDistribuidor(){
      return this.router.navigate(["/","distribuidor"])
    }
}
