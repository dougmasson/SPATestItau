import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostagemHora } from './postagem-hora';

@Injectable({
  providedIn: 'root'
})
export class PostagemHoraService {

  private apiUrl = 'http://localhost:1082/APIService/testeItau/TotalPostagemPorHora';

  constructor(
    private http: HttpClient
  ) { }

  getPostagemHora(): Observable<PostagemHora[]> {
    return this.http.get<PostagemHora[]>(this.apiUrl);
  }
}
