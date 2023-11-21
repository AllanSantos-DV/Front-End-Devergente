import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Postagem } from 'src/app/interfaces/postagem';
import { PostagensService } from 'src/app/services/postagens.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CriarPostagemComponent } from '../criar-postagem/criar-postagem.component';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent {
  @Input() postagem: Postagem = {
    id: 0,
    usuario: {
      id: 0,
      nome: '',
      username: '',
      imagemUrl: ','
    },
    conteudo: '',
    imagemUrl: '',
    data: new Date()
  }

  constructor(private router: Router,
    private dialog: MatDialog) {}

    editarPostagem(id: number) {
      this.dialog.open(CriarPostagemComponent);
    }

}
