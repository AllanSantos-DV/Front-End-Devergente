import { Component, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CriarPostagemComponent } from '../../criar-postagem/criar-postagem.component';
import { PostagensService } from 'src/app/services/postagens.service';
import { Postagem } from 'src/app/interfaces/postagem';
import { Router } from '@angular/router';

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
    /* this.postagemService.listarPostagens().subscribe((listaPostagens) => {
       this.listaPostagens = listaPostagens;
     }) */
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    console.log('Evento de rolagem disparado');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.carregarMaisPostagens();
    }
  }

  carregarMaisPostagens(): void {
    this.postagemService.listarPostagens().subscribe(() => {
      this.listaPostagens.forEach(postagem => {
        if (!this.listaPostagens.find(p => p.id === postagem.id)) {
          this.listaPostagens.push(postagem);
        }
      });
    });
  }
}
