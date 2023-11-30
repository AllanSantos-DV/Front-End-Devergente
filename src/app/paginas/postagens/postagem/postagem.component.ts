import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Postagem } from 'src/app/interfaces/postagem';
import { PostagensService } from 'src/app/services/postagens.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CriarPostagemComponent } from '../criar-postagem/criar-postagem.component';
import { MatOptionSelectionChange } from '@angular/material/core';
import { ComentariosComponent } from '../../comentarios/comentarios/comentarios.component';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent {

  curtido = false;

  @Input() postagem: Postagem = {
    id: 0,
    usuario: {
      id: 0,
      nome: '',
      username: '',
      img_perfil: '',
    },
    conteudo: '',
    imagemUrl: '',
    data: new Date()
  }

  constructor(private postagemService: PostagensService,
    private router: Router,
    private dialog: MatDialog) { }

  comentarios(id: number | undefined) {
    this.router.navigate(['/postagem/', id, 'comentarios']);
  }

  editarPostagem(postagem: Postagem) {
    const dialogRef = this.dialog.open(CriarPostagemComponent, {
      data: { editar: postagem }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  excluirPostagem(id: number | undefined) {
    if (id) {
      this.postagemService.excluirPostagem(id).
        subscribe({
          next: (res) => {
            alert("Postagem deletada com sucesso")
            location.reload();
          },
          error: () => {
            alert("Erro ao deletar a postagem")
          }
        })
    } else {
      console.log(id)
    }
  }
}
