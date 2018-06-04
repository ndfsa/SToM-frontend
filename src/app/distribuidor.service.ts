import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {Globals} from './globals';

@Injectable()
export class DistribuidorService {

  constructor(private http: Http, private globals: Globals) { }



  deleteDistribuidor(){
    console.log("hol")
  }

  addDistribuidor(distrib){
    let url = 'http://localhost:8080/SToM/distribuidor/post';
    let data = JSON.stringify(distrib);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.post(url, data, requestOptions);
  }
}
