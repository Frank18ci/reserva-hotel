import { Component } from '@angular/core';
import { FiltrosComponent } from "../filtros/filtros.component";
import { Opcion } from './models/Opcion';
import { OpcionComponent } from "../opcion/opcion.component";

@Component({
  selector: 'app-opciones',
  standalone: true,
  imports: [FiltrosComponent, OpcionComponent],
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.css'
})
export class OpcionesComponent {
  opciones: Opcion[] = [
    {
      id: 1,
      imagenes: ["imagen1.jpg", "imagen2.jpg"],
      ubicacion: "Lima, Perú",
      anfitrion: "Juan Pérez",
      fecha: "2024-12-01",
      precio: 150,
      puntaje: 4.5,
      favorito: true,
      recomendacion: false
    },
    {
      id: 2,
      imagenes: ["imagen3.jpg", "imagen4.jpg"],
      ubicacion: "Cusco, Perú",
      anfitrion: "Ana López",
      fecha: "2024-12-05",
      precio: 200,
      puntaje: 4.8,
      favorito: false,
      recomendacion: true
    },
    {
      id: 3,
      imagenes: ["imagen5.jpg", "imagen6.jpg"],
      ubicacion: "Buenos Aires, Argentina",
      anfitrion: "Carlos Méndez",
      fecha: "2024-12-10",
      precio: 120,
      puntaje: 4.3,
      favorito: false,
      recomendacion: false
    },
    {
      id: 4,
      imagenes: ["imagen7.jpg", "imagen8.jpg"],
      ubicacion: "Bogotá, Colombia",
      anfitrion: "María Fernández",
      fecha: "2024-12-15",
      precio: 180,
      puntaje: 4.7,
      favorito: true,
      recomendacion: true
    }
  ];  
}
