import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ServiceApiService } from '../../services/service-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-r',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cliente-r.component.html',
  styleUrl: './cliente-r.component.css'
})
export class ClienteRComponent {
  clienteId: number = 0;
  clienteFormulario = new FormGroup({
    dni: new FormControl('', Validators.required),
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    numeroTelefono: new FormControl('', Validators.required),
  })
  cliente: Cliente = {
    id: 0,
    dni: '',
    nombres: '',
    apellidos: '',
    numTel: '',
  };
  private serviceApi: ServiceApiService = inject(ServiceApiService)
  sumitForm(){
    this.cliente.dni = this.clienteFormulario.value.dni!
      this.cliente.nombres = this.clienteFormulario.value.nombres!
      this.cliente.apellidos = this.clienteFormulario.value.apellidos!
      this.cliente.numTel = this.clienteFormulario.value.numeroTelefono!
    if(this.clienteId != 0){
      this.cliente.id = this.clienteId
      this.serviceApi.actualizar(this.cliente).subscribe(c => {
        console.log(c)
      })
    } else{
      this.serviceApi.agregar(this.cliente).subscribe(c => {
      console.log(c)
    })
    }
    
  }
  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe((params) => {
      this.clienteId = params['id'];
      this.buscarCliente(this.clienteId);
    });
  }
  buscarCliente(id: number){
    this.serviceApi.buscar(id).subscribe(c => {
      this.clienteFormulario.setValue({
        dni: c.dni,
        nombres: c.nombres,
        apellidos: c.apellidos,
        numeroTelefono: c.numTel        
      }) 
    });
  }
}
