import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/interfaces/postagem';
import { PostagensService } from 'src/app/services/postagens.service';
import { CriarPostagemComponent } from '../../criar-postagem/criar-postagem.component';

@Component({
  selector: 'app-feed-postagens',
  templateUrl: './feed-postagens.component.html',
  styleUrls: ['./feed-postagens.component.css']
})
export class FeedPostagensComponent implements OnInit {

  listaPostagens: Postagem[] = [];

  constructor(private postagemService: PostagensService) { }

  ngOnInit(): void {
    this.carregarMaisPostagens();
    this.postagemService.novaPostagemCriada.subscribe((novaPostagem) => {
      this.listaPostagens.unshift(novaPostagem);
      console.log(this.listaPostagens);
    });
  }

  carregarMaisPostagens(): void {
    this.postagemService.listarPostagens(this.listaPostagens.length, 10).subscribe((listaPostagens) => {
      console.log(listaPostagens);
      listaPostagens.forEach(postagem => {
        console.log(postagem);
        if (!this.listaPostagens.find(p => p.id === postagem.id)) {
          this.listaPostagens.push(postagem);
        }
      });
    });
  }
}
