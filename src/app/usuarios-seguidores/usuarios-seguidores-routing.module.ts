import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosSeguidoresRoutingModule { }
