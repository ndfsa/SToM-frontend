import { Component, OnInit } from '@angular/core';
import {Globals} from "../globals";
import {ClienteService} from "../services/cliente.service";
import {Response} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service: ClienteService,  public globals: Globals, private router: Router) { }

  ngOnInit() {
  }
  delete(){
    this.service.deleteCliente().subscribe((response:Response) => {
      if (response.text() != "0"){
        this.globals.signOutReset();
        this.goHome();
      }
    });
  }
  goHome(){
    return this.router.navigate(["/","home"])
  }
}
