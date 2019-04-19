import { Component, OnInit } from '@angular/core';
import { PostagemIdioma } from '../postagem-idioma';
import { PostagemIdiomaService } from '../postagem-idioma.service';

@Component({
  selector: 'app-listagem-postagem-idioma',
  templateUrl: './listagem-postagem-idioma.component.html',
  styleUrls: ['./listagem-postagem-idioma.component.css']
})
export class ListagemPostagemIdiomaComponent implements OnInit {
  postagemIdioma: PostagemIdioma[];

  constructor(private postagemIdiomaService: PostagemIdiomaService) { }

  ngOnInit() {
    this.getPostagemHora();
  }

  getPostagemHora(): void {
    this.postagemIdiomaService.getPostagemIdioma()
      .subscribe(postagemIdioma => this.postagemIdioma = postagemIdioma);
  }

}
