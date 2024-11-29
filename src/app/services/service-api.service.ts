import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  private http = inject(HttpClient)
  url = 'http://localhost:8080/'
  cliente = 'clientes'
  constructor() {

   }
   listar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url + this.cliente).pipe(map(r => r))
   }
   agregar(clienteN: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url + this.cliente, clienteN).pipe(map(r => r))
   }
   buscar(id: number):Observable<Cliente>{
    return this.http.get<Cliente>(this.url + this.cliente + "/" + id).pipe(map(r => r))
   }
   actualizar(clienteA: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url + this.cliente, clienteA).pipe(map(r => r))
   }
   eliminar(id: number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.url + this.cliente + "/" + id).pipe(map(r => r))
   }
}
