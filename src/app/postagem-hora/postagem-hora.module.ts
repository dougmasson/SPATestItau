import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostagemHoraRoutingModule } from './postagem-hora-routing.module';
import { ListagemPostagemHoraComponent } from './listagem-postagem-hora/listagem-postagem-hora.component';

@NgModule({
  declarations: [ListagemPostagemHoraComponent],
  exports: [ListagemPostagemHoraComponent],
  imports: [
    CommonModule,
    PostagemHoraRoutingModule
  ]
})

export class PostagemHoraModule { }
