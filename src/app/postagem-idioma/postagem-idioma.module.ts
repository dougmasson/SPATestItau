import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostagemIdiomaRoutingModule } from './postagem-idioma-routing.module';
import { ListagemPostagemIdiomaComponent } from './listagem-postagem-idioma/listagem-postagem-idioma.component';

@NgModule({
  declarations: [ListagemPostagemIdiomaComponent],
  exports: [ListagemPostagemIdiomaComponent],
  imports: [
    CommonModule,
    PostagemIdiomaRoutingModule
  ]
})
export class PostagemIdiomaModule { }
