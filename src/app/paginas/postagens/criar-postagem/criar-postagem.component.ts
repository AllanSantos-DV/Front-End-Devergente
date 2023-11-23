import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/interfaces/postagem';
import { PostagensService } from 'src/app/services/postagens.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostagemComponent } from '../postagem/postagem.component';
import { S3UploadService } from './../../../services/s3-upload.service';

@Component({
  selector: 'app-criar-postagem',
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css']
})
export class CriarPostagemComponent {

  postagem: Postagem = {
    id: 0,
    usuario: {
      id: 0,
      nome: '',
      username: '',
      imagemUrl: '',
    },
    conteudo: '',
    imagemUrl: '',
    data: new Date()
  }

  public editar!: Postagem;

  public formPostagem!: FormGroup;

  acaoHeader: string = "Criar Postagem";

  imagemSelecionada!: File;

  constructor(private formBuilder: FormBuilder,
    private service: PostagensService,
    private router: Router,
    private s3UploadService: S3UploadService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CriarPostagemComponent>) {

      if(this.data) {
        this.editar = this.data.editar;
      }

    this.formPostagem = this.formBuilder.group({
      id: [0],
      usuario: this.formBuilder.group({
        id: [0],
        nome: [''],
        username: [''],
      }),
      conteudo: ['', [Validators.required, Validators.minLength(3)]],
      imagemUrl: ['', this.imagemCarregadaPost],
      data: [new Date().toLocaleString]
    });
  }

  imagemCarregadaPost(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file) {
      this.s3UploadService.enviarImagemPost(file).then(url => {
        console.log('URL da imagem:', url);
      }).catch(error => {
        console.error('Erro ao enviar a imagem:', error);
      });
    }
  }

  cancelarPostagem() {
    this.dialogRef.close();
  }

  criarPostagem() {
    if (this.editar == null) {
      this.service.criarPostagem(this.formPostagem.value).subscribe((res: any) => {
        alert("Sua postagem foi criada com sucesso");
        this.formPostagem.reset();
        this.dialogRef.close('postagem criada');
        location.reload();
      }, (err: Error) => {
        alert("Não foi possível criar sua postagem")
      });
    } else {
      this.editarPostagem()
    }
  }

  editarPostagem() {
    if (this.editar && this.editar.id) {
      this.service.editarPostagem(this.formPostagem.value, this.editar.id)
      .subscribe({
        next:(res) => {
          alert("Sua postagem foi atualizada com sucesso");
          this.formPostagem.reset();
          this.dialogRef.close('postagem atualizada');
          location.reload();
        },
        error:() => {
          alert("Erro ao atualizar a postagem")
        }
      })
    }
  }

  ngOnInit() {
    if (this.editar) {
      this.acaoHeader = "Editar postagem"
      this.formPostagem.controls['conteudo'].setValue(this.editar.conteudo);
      this.formPostagem.controls['imagemUrl'].setValue(this.editar.imagemUrl);
    }
  }
}
