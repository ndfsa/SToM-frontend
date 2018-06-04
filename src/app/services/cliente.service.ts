import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions, Response} from '@angular/http';
import {Globals} from "../globals";

@Injectable()
export class ClienteService {

  constructor(private http: Http, private globals: Globals) { }
  logCliente(cliente) {
    let url = 'http://localhost:8081/SToM/cliente/login';
    let data = JSON.stringify(cliente);
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
  registerCliente(cliente){
    let url = 'http://localhost:8081/SToM/cliente/post';
    let data = JSON.stringify(cliente);
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

  modifyCliente(cliente){
    let url = 'http://localhost:8081/SToM/cliente/PUT/'+ this.globals.global_id_cliente;
    let data = JSON.stringify(cliente);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Put,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.put(url, data, requestOptions);
  }
  deleteCliente(){
    let url = 'http://localhost:8081/SToM/cliente/borrar/'+ this.globals.global_id_cliente;
    return this.http.delete(url);
  }
}
