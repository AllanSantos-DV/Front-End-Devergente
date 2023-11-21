import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/interfaces/postagem';
import { PostagensService } from 'src/app/services/postagens.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostagemComponent } from '../postagem/postagem.component';

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
      imagemUrl: ['', this.onPhotoSelected],
      data: [new Date().toLocaleString]
    });
  }

  onPhotoSelected(onPhotoSelector: HTMLInputElement) {
    if (onPhotoSelector.files) {
      this.imagemSelecionada = onPhotoSelector.files[0];
      if (!this.imagemSelecionada) return;
      let fileReader = new FileReader();
      fileReader.readAsDataURL(this.imagemSelecionada);
      fileReader.addEventListener("loadend", ev => {
        if (fileReader.result) {
          let readableString = fileReader.result.toString();
          let imagemPrevia = <HTMLImageElement>document.getElementById("img-previa");
          imagemPrevia.src = readableString;
        }
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
