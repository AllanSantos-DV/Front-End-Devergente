import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { Postagem } from 'src/app/interfaces/postagem';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PostagensService } from 'src/app/services/postagens.service';
import { S3UploadService } from './../../../services/s3-upload.service';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent {

  public formularioFotosPerfil!: FormGroup;

  usuario!: Usuario;

  postagens: Postagem[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private postagemService: PostagensService,
    private router: Router,
    private route: ActivatedRoute,
    private s3UploadService: S3UploadService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.usuarioService.buscarPorId(parseInt(id!)).subscribe((usuario) => {
      this.usuario = usuario;

      if (this.usuario.id !== undefined) {
        this.postagemService.buscarPorUsuarioId(this.usuario.id).subscribe((postagens) => {
          this.postagens = postagens;
        });
      }
    });
  }

  exibirPerfil() {
    this.usuarioService.listarUsuario(this.usuario).subscribe(() => {
      this.router.navigate(['/perfil', this.usuario.id])
    })
  }

  imagemCarregadaPerfil(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file) {
      this.s3UploadService.enviarImagemPerfil(file).then(url => {
        console.log('URL da imagem:', url);
      }).catch(error => {
        console.error('Erro ao enviar a imagem:', error);
      });
    }
  }

  imagemCarregadaCapa(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file) {
      this.s3UploadService.enviarImagemCapa(file).then(url => {
        console.log('URL da imagem:', url);
      }).catch(error => {
        console.error('Erro ao enviar a imagem:', error);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/feed'])
  }

  editarPerfil() {
    this.router.navigate(['/editar-perfil', this.usuario.id])
  }

}