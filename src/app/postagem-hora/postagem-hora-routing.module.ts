import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemPostagemHoraComponent } from './listagem-postagem-hora/listagem-postagem-hora.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemPostagemHoraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostagemHoraRoutingModule { }
