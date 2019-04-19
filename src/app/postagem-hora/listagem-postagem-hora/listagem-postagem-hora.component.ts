import { Component, OnInit } from '@angular/core';
import { PostagemHora } from '../postagem-hora';
import { PostagemHoraService } from '../postagem-hora.service';

@Component({
  selector: 'app-listagem-postagem-hora',
  templateUrl: './listagem-postagem-hora.component.html',
  styleUrls: ['./listagem-postagem-hora.component.css']
})
export class ListagemPostagemHoraComponent implements OnInit {
  postagemHora: PostagemHora[];

  constructor(private postagemHoraService: PostagemHoraService) { }

  ngOnInit() {
    this.getPostagemHora();
  }

  getPostagemHora(): void {
    this.postagemHoraService.getPostagemHora()
      .subscribe(postagemHora => this.postagemHora = postagemHora);
  }

}
