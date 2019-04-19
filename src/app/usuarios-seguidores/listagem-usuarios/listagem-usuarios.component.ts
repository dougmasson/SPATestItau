import { Component, OnInit } from '@angular/core';
import { UsuariosSeguidores } from '../usuarios-seguidores';
import { UsuariosSeguidoresService } from '../usuarios-seguidores.service';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent implements OnInit {
  usuariosSeguidores: UsuariosSeguidores[];

  constructor(private usuariosSeguidoresService: UsuariosSeguidoresService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuariosSeguidoresService.getUsuarios()
      .subscribe(usuariosSeguidores => this.usuariosSeguidores = usuariosSeguidores);
  }

}
