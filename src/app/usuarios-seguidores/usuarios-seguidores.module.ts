import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosSeguidoresRoutingModule } from './usuarios-seguidores-routing.module';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';

@NgModule({
  declarations: [ListagemUsuariosComponent],
  exports: [ListagemUsuariosComponent],
  imports: [
    CommonModule,
    UsuariosSeguidoresRoutingModule
  ]
})
export class UsuariosSeguidoresModule { }
