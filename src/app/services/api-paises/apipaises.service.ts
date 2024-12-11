import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../../model/pais';

@Injectable({
  providedIn: 'root'
})
export class ApipaisesService {
  private http = inject(HttpClient)
  url:string = "http://localhost:8080/paises"
  constructor() { }
  listar():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url)
  }
}
