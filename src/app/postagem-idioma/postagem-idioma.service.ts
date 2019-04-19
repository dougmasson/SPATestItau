import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostagemIdioma } from './postagem-idioma';

@Injectable({
  providedIn: 'root'
})
export class PostagemIdiomaService {

  private apiUrl = 'http://localhost:1082/APIService/testeItau/TotalPostagemHashTagPorIdioma';

  constructor(
    private http: HttpClient
  ){}

  getPostagemIdioma(): Observable<PostagemIdioma[]> {
    return this.http.get<PostagemIdioma[]>(this.apiUrl);
  }
}
