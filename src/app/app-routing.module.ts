import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios-seguidores',
    loadChildren: './usuarios-seguidores/usuarios-seguidores.module#UsuariosSeguidoresModule'
  },
  {
    path: 'postagem-hora',
    loadChildren: './postagem-hora/postagem-hora.module#PostagemHoraModule'
  },
  {
    path: 'postagem-idioma',
    loadChildren: './postagem-idioma/postagem-idioma.module#PostagemIdiomaModule'
  },
  { path: '', redirectTo: 'usuarios-seguidores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
