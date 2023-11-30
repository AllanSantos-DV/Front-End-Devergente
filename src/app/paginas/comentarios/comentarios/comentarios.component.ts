import { Component, Inject, Input } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { Postagem } from 'src/app/interfaces/postagem';
import { PostagensService } from 'src/app/services/postagens.service';
import { CriarPostagemComponent } from '../../postagens/criar-postagem/criar-postagem.component';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {

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

  listaComentarios: Comentario[] = [];

  @Input() comentario: Comentario = {
    id: 0,
    postagem: {
      id: 0,
    },
    usuario: {
      id: 0,
      username: '',
      img_perfil: '',
    },
    conteudo: '',
    data: new Date()
  }

  constructor(private postagemService: PostagensService,
    private comentariosService: ComentariosService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.postagemService.buscarPorId(parseInt(id!)).subscribe((postagem) => {
      this.postagem = postagem;
    });

    this.comentariosService.listarComentarios().subscribe((listaComentarios) => {
      this.listaComentarios = listaComentarios;
    });
  }

  comentarios(id: number | undefined) {
    this.router.navigate(['/postagem/', id, '/comentarios']);
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
