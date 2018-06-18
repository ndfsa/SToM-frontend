import {Injectable} from '@angular/core';

@Injectable()
export class Globals {
  public global_id_cliente: number = 0;
  public global_nombre_cliente: string = 'esto es un nombre';
  public global_correo_cliente: string = 'esto es un correo';
  public global_id_juego: number = 0;
  public global_juegos = [];
  signOutReset() {
    this.global_id_cliente = 0;
    this.global_nombre_cliente = 'esto es un nombre';
    this.global_correo_cliente = 'esto es un correo';
    this.global_id_juego = 0;
    this.global_juegos = [];
  }

}
