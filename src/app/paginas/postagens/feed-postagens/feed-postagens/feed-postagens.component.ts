import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CriarPostagemComponent } from '../../criar-postagem/criar-postagem.component';

@Component({
  selector: 'app-feed-postagens',
  templateUrl: './feed-postagens.component.html',
  styleUrls: ['./feed-postagens.component.css']
})
export class FeedPostagensComponent {

  constructor(private dialog: MatDialog) {

  }

  criarPostagem() {
    this.dialog.open(CriarPostagemComponent);
  }
}
