import { Component, Input } from '@angular/core';
import { Opcion } from '../opciones/models/Opcion';
import { CommonModule } from '@angular/common';
import { PipeUbicacionImagesPipe } from '../opciones/pipes/pipe-ubicacion-images.pipe';

@Component({
  selector: 'app-opcion',
  standalone: true,
  imports: [CommonModule, PipeUbicacionImagesPipe],
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
