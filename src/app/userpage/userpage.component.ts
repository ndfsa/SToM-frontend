import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals';
import {ClienteService} from "../services/cliente.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(public globals: Globals, private service: ClienteService) { }

  ngOnInit() {
    this.service.getTodosJuegos(this.globals.global_id_cliente).subscribe((response:Response) => {
      this.globals.global_juegos = response.json();
      console.log(this.globals.global_juegos);
    });
  }
}
