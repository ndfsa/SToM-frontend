import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions, Response} from '@angular/http';

@Injectable()
export class ClienteService {

  constructor(private http: Http) { }
  logCliente(cliente) {
    let url = 'http://localhost:8080/SToM/cliente/login';
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
    let url = 'http://localhost:8080/SToM/cliente/post';
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
    return this.http.post(url, data, requestOptions).forEach(res => res.json());
  }

}
