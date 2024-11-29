import { Component, Input } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ServiceApiService } from '../../services/service-api.service';
import { CardClienteComponent } from "../../component/card-cliente/card-cliente.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CardClienteComponent, RouterLink],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  
  clientes: Cliente[] = []
  constructor(private serviceApi: ServiceApiService){
     serviceApi.listar().subscribe(d => {
      this.clientes = d;
      console.log(this.clientes)
    })
  }
}
