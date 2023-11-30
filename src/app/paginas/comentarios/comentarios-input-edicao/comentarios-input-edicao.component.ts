import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { Postagem } from 'src/app/interfaces/postagem';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { PostagensService } from 'src/app/services/postagens.service';

@Component({
  selector: 'app-comentarios-input-edicao',
  templateUrl: './comentarios-input-edicao.component.html',
  styleUrls: ['./comentarios-input-edicao.component.css']
})
export class ComentariosInputEdicaoComponent {
  @Input() comentarioBtn!: string;
  @Input() botaoCancelar: boolean = false;
  @Input() textoInicial: string = '';
  @Input() comentarioId: number | null | undefined = null;

  formularioEdicaoComentario!: FormGroup;

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
          id: 0,
          username: '',
          img_perfil: '',
        },
        conteudo: ['', [Validators.required, Validators.maxLength(255)]],
        data: new Date()
      });
  }
  
  ngOnInit() {
    if (this.comentarioId !== undefined && this.comentarioId !== null) {
      this.comentarioService.buscarPorId(this.comentarioId).subscribe((comentario) => {
        this.formularioEdicaoComentario.patchValue({
          id: comentario.id,
          postagem: {
            id: comentario.postagem.id,
          },
          conteudo: comentario.conteudo
        });
      });
    }
  }

  editarComentario() {
    const id = this.formularioEdicaoComentario.get('id')?.value;
  
    if (id) {
      this.comentarioService.buscarPorId(id).subscribe((comentarioExistente) => {
        const novoComentario = {
          ...this.formularioEdicaoComentario.value,
          usuario: {
            ...this.formularioEdicaoComentario.value.usuario,
            id: comentarioExistente.usuario.id,
            username: comentarioExistente.usuario.username,
            img_perfil: comentarioExistente.usuario.img_perfil,
          },
        };
  
        this.comentarioService.editarComentario(novoComentario, id).subscribe((res: any) => {
          alert("Comentário editado com sucesso!");
          this.formularioEdicaoComentario.reset();
          location.reload();
        }, (err: Error) => {
          alert("Não foi possível editar o seu comentário: " + err.message);
        });
      });
    } else {
      alert("Não foi possível editar o comentário: ID do comentário não encontrado.");
    }
  }
}
