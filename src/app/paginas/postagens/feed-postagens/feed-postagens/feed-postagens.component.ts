import { Component, HostListener } from '@angular/core';
import { PostagensService } from 'src/app/services/postagens.service';
import { Postagem } from 'src/app/interfaces/postagem';

@Component({
  selector: 'app-feed-postagens',
  templateUrl: './feed-postagens.component.html',
  styleUrls: ['./feed-postagens.component.css']
})
export class FeedPostagensComponent {

  listaPostagens: Postagem[] = [];


  constructor(private postagemService: PostagensService) { }

  ngOnInit(): void {
    this.carregarMaisPostagens();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.carregarMaisPostagens();
    }
  }

  carregarMaisPostagens(): void {
    this.postagemService.listarPostagens(this.listaPostagens.length, 10).subscribe((listaPostagens) => {
      listaPostagens.forEach(postagem => {
        if (!this.listaPostagens.find(p => p.id === postagem.id)) {
          this.listaPostagens.push(postagem);
        }
      });
    });
  }
}
