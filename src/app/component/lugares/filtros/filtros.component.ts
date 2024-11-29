import { Component } from '@angular/core';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {
  cambiarI() {
    const elemento = document.getElementsByClassName('box-opciones-selecciones')[0]?.getElementsByClassName('btn-opcion-cambio')[0]?.clientWidth;
    const scroll = document.getElementsByClassName('box-opciones-selecciones')[0];
    scroll.scrollLeft -= (elemento * 3);

  }
  
  cambiarD() {
    const elemento = document.getElementsByClassName('box-opciones-selecciones')[0]?.getElementsByClassName('btn-opcion-cambio')[0]?.clientWidth;
    const scroll = document.getElementsByClassName('box-opciones-selecciones')[0];
    scroll.scrollLeft += (elemento * 3);
  }
  
}
