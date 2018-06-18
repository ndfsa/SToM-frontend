import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {Globals} from './globals';

@Injectable()
export class DistribuidorService {

  constructor(private http: Http, private globals: Globals) { }



  deleteDistribuidor(id){
    console.log("hola");
    let url = 'http://localhost:8083/SToM/distribuidor/borrar/' + id;
    return this.http.delete(url);
  }

  addDistribuidor(distrib){
    let url = 'http://localhost:8083/SToM/distribuidor/post';
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

  editarDistribuidor(distrib,id){
    let url = 'http://localhost:8083/SToM/distribuidor/PUT/'+id;
    let data = JSON.stringify(distrib);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Put,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.post(url, data, requestOptions);
  }
}
