import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions, Response} from '@angular/http';
import {Globals} from "../globals";

@Injectable()
export class JuegosService{

  constructor(private http: Http, private globals: Globals) { }

  registerGame(juego){
    let url = 'http://localhost:8083/SToM/juegos/post';
    let data = JSON.stringify(juego);
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

