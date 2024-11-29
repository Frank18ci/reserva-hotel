import { Component, Input } from '@angular/core';
import { Opcion } from '../opciones/models/Opcion';

@Component({
  selector: 'app-opcion',
  standalone: true,
  imports: [],
  templateUrl: './opcion.component.html',
  styleUrl: './opcion.component.css'
})
export class OpcionComponent {
  @Input()
  opcion1: Opcion = {
    id: 0,
    imagenes: [],
    ubicacion: "",
    anfitrion: "",
    fecha: "",
    precio: 0,
    puntaje: 0,
    favorito: false,
    recomendacion: false
  };
  
}
