import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { Postagem } from 'src/app/interfaces/postagem';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { PostagensService } from 'src/app/services/postagens.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {

  formularioEdicaoComentario!: FormGroup;

  editando: boolean = false;

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
  constructor(private fb: FormBuilder,
    private comentarioService: ComentariosService,
    private postagemService: PostagensService,
    private router: Router,
    private route: ActivatedRoute) {

    this.formularioEdicaoComentario = this.fb.group({
      id: 0,
      postagem: {
        id: 0,
      },
      usuario: {
        id: null,
        username: '',
        img_perfil: '',
      },
      conteudo: ['', [Validators.required, Validators.maxLength(255)]],
      data: new Date()
    });
  }

  ngOnInit() {

    this.formularioEdicaoComentario.patchValue({
      postagem: {
        id: this.comentario.postagem.id,
      },
      conteudo: this.comentario.conteudo
    });
  }

  edicaoComentario() {
    this.editando = true;
  }

  excluirComentario(id: number | undefined) {
    if (id) {
      this.comentarioService.excluirComentario(id).
        subscribe({
          next: (res) => {
            alert("Comentário deletado com sucesso")
            location.reload();
          },
          error: () => {
            alert("Erro ao deletar o comentário")
          }
        })
    } else {
      console.log(id)
    }
  }
}
