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
      imagenes: ["img1", "img2"],
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
      imagenes: ["img3", "img4"],
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
      imagenes: ["img5", "img6"],
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
      imagenes: ["img7", "img1"],
      ubicacion: "Bogotá, Colombia",
      anfitrion: "María Fernández",
      fecha: "2024-12-15",
      precio: 180,
      puntaje: 4.7,
      favorito: true,
      recomendacion: true
    },
    {
      id: 5,
      imagenes: ["img1", "img2"],
      ubicacion: "Lima, Perú",
      anfitrion: "Juan Pérez",
      fecha: "2024-12-01",
      precio: 150,
      puntaje: 4.5,
      favorito: true,
      recomendacion: false
    },
    {
      id: 6,
      imagenes: ["img3", "img4"],
      ubicacion: "Cusco, Perú",
      anfitrion: "Ana López",
      fecha: "2024-12-05",
      precio: 200,
      puntaje: 4.8,
      favorito: false,
      recomendacion: true
    },
    {
      id: 7,
      imagenes: ["img5", "img6"],
      ubicacion: "Buenos Aires, Argentina",
      anfitrion: "Carlos Méndez",
      fecha: "2024-12-10",
      precio: 120,
      puntaje: 4.3,
      favorito: false,
      recomendacion: false
    },
    {
      id: 8,
      imagenes: ["img7", "img1"],
      ubicacion: "Bogotá, Colombia",
      anfitrion: "María Fernández",
      fecha: "2024-12-15",
      precio: 180,
      puntaje: 4.7,
      favorito: true,
      recomendacion: true
    },
    {
      id: 9,
      imagenes: ["img1", "img2"],
      ubicacion: "Lima, Perú",
      anfitrion: "Juan Pérez",
      fecha: "2024-12-01",
      precio: 150,
      puntaje: 4.5,
      favorito: true,
      recomendacion: false
    },
    {
      id: 10,
      imagenes: ["img3", "img4"],
      ubicacion: "Cusco, Perú",
      anfitrion: "Ana López",
      fecha: "2024-12-05",
      precio: 200,
      puntaje: 4.8,
      favorito: false,
      recomendacion: true
    },
    {
      id: 11,
      imagenes: ["img5", "img6"],
      ubicacion: "Buenos Aires, Argentina",
      anfitrion: "Carlos Méndez",
      fecha: "2024-12-10",
      precio: 120,
      puntaje: 4.3,
      favorito: false,
      recomendacion: false
    },
    {
      id: 12,
      imagenes: ["img7", "img1"],
      ubicacion: "Bogotá, Colombia",
      anfitrion: "María Fernández",
      fecha: "2024-12-15",
      precio: 180,
      puntaje: 4.7,
      favorito: true,
      recomendacion: true
    },
    {
      id: 13,
      imagenes: ["img1", "img2"],
      ubicacion: "Lima, Perú",
      anfitrion: "Juan Pérez",
      fecha: "2024-12-01",
      precio: 150,
      puntaje: 4.5,
      favorito: true,
      recomendacion: false
    },
    {
      id: 14,
      imagenes: ["img3", "img4"],
      ubicacion: "Cusco, Perú",
      anfitrion: "Ana López",
      fecha: "2024-12-05",
      precio: 200,
      puntaje: 4.8,
      favorito: false,
      recomendacion: true
    },
    {
      id: 15,
      imagenes: ["img5", "img6"],
      ubicacion: "Buenos Aires, Argentina",
      anfitrion: "Carlos Méndez",
      fecha: "2024-12-10",
      precio: 120,
      puntaje: 4.3,
      favorito: false,
      recomendacion: false
    },
    {
      id: 16,
      imagenes: ["img7", "img1"],
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
