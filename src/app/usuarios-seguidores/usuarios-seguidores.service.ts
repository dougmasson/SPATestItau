import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosSeguidores } from './usuarios-seguidores';

@Injectable({
  providedIn: 'root'
})
export class UsuariosSeguidoresService {

  private apiUrl = 'http://localhost:1082/APIService/testeItau/ExibirUsuarioMaioresSeguidores';

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<UsuariosSeguidores[]> {
    return this.http.get<UsuariosSeguidores[]>(this.apiUrl);
  }

}

