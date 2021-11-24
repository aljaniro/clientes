import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Persona } from '../persona/persona.module';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  client$= new Subject<Persona>()
  constructor() { }
  enviar(value:Persona){
    this.client$.next(value)
  }
  getcliente():Observable<any>{
    return this.client$.asObservable()
  }
}
