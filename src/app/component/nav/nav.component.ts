import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApipaisesService } from '../../services/api-paises/apipaises.service';
import { Pais } from '../../model/pais';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  ModalStatus: boolean = false;
  DropMenu: boolean = false;
  changeDropMenu(){
    this.DropMenu = !this.DropMenu
    console.log(this.DropMenu)
  }
  listaPaises: Pais[] = []
  constructor(private apiPaises: ApipaisesService){
  }
  listar(){
    this.apiPaises.listar().subscribe(c => {
      this.listaPaises = c  
    })
  }
  changeModalL(){
    this.ModalStatus = !this.ModalStatus
    this.changeDropMenu();
    this.listar()
  }
}
