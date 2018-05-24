import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';

@Injectable()
export class ClienteService {

  constructor(private http: Http) { }

  getCliente(cliente) {
    let url = 'http://localhost:8080/SToM/cliente/login';
    let data = JSON.stringify(cliente);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.get(url, requestOptions).forEach(res => res.json());
  }

}
