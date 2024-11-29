import { Component, Input } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { RouterLink } from '@angular/router';
import { ServiceApiService } from '../../services/service-api.service';

@Component({
  selector: 'app-card-cliente',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-cliente.component.html',
  styleUrl: './card-cliente.component.css'
})
export class CardClienteComponent {
@Input() cliente: Cliente = {nombres: '', apellidos: '', dni: '', id: 0, numTel: ''}
constructor(private serviceApi: ServiceApiService){

}
eliminar(id: number){
  this.serviceApi.eliminar(id).subscribe(c => {
    console.log(c)
  })
}
}
