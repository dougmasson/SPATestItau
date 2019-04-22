import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemPostagemIdiomaComponent } from './listagem-postagem-idioma/listagem-postagem-idioma.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemPostagemIdiomaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class PostagemIdiomaRoutingModule { }
