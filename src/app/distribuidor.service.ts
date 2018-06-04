import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Globals} from './globals';

@Injectable()
export class DistribuidorService {

  constructor(private http: Http, private globals: Globals) { }



  deleteDistribuidor(id){
    console.log("hola");
    let url = 'http://localhost:8080/SToM/distribuidor/borrar/' + id;
    return this.http.delete(url);
  }
}
