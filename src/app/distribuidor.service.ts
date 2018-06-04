import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Globals} from './globals';

@Injectable()
export class DistribuidorService {

  constructor(private http: Http, private globals: Globals) { }



  deleteDistribuidor(){
    console.log("hol")
  }
}
