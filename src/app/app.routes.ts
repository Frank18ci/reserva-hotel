import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClienteRComponent } from './pages/cliente-r/cliente-r.component';
import { OpcionesComponent } from './component/lugares/opciones/opciones.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'clientes',
        component: ClienteComponent
    },
    {
        path: 'cliente',
        component: ClienteRComponent
    },
    {
        path: 'Expeciencias',
        component: OpcionesComponent
    }
];
