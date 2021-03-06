import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions, Response} from '@angular/http';
import {Globals} from "../globals";

@Injectable()
export class JuegosService{

  constructor(private http: Http, private globals: Globals) { }

  registerGame(juego){
    let url = 'http://localhost:8080/SToM/juegos/post';
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
  buscarJuego(juego){
    let url = 'http://localhost:8080/SToM/juegos/buscar/' + juego;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: url,
      headers: headers
    });
    return this.http.get(url, requestOptions);
  }
  getJuego(){
    let url = 'http://localhost:8080/SToM/juegos/getjuego/' + this.globals.global_id_juego;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: url,
      headers: headers
    });
    return this.http.get(url, requestOptions);
  }
  devolverJuego(id){
    let url = 'http://localhost:8080/SToM/juegos/delete/devolucion/'+ this.globals.global_id_cliente + '/' + id;
    return this.http.delete(url);
  }
  comprarJuego(){
    let url = 'http://localhost:8080/SToM/juegos/postCompra';
    let compra = {
      id_juego: this.globals.global_id_juego,
      id_cliente: this.globals.global_id_cliente
    };
    let data = JSON.stringify(compra);
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
