import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Postagem } from 'src/app/interfaces/postagem';
import { PostagensService } from 'src/app/services/postagens.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-criar-postagem',
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css']
})
export class CriarPostagemComponent {

  public editar!: Postagem;

  public formPostagem!: FormGroup;

  acaoHeader: string = "Criar Postagem";

  imagemSelecionada!: File | null;

  constructor(private formBuilder: FormBuilder,
              private service: PostagensService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<CriarPostagemComponent>) {

    if (this.data) {
      this.editar = this.data.editar;
    }

    const postagementity: Postagem = {
      conteudo: this.formPostagem?.value.conteudo,
      imagemUrl: '',
      data: new Date()
    }

    this.formPostagem = this.formBuilder.group({
      postagem: [postagementity],
      token: [localStorage.getItem('token')],
      imagemUrl: [''],
    });
  }


  imagemCarregadaPost(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file)  this.imagemSelecionada = file;
    else this.imagemSelecionada = null;
  }

  cancelarPostagem() {
    this.dialogRef.close();
  }

  criarPostagem() {
    if (this.editar == null) {
      console.log(this.formPostagem.value);
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
          next: (res) => {
            alert("Sua postagem foi atualizada com sucesso");
            this.formPostagem.reset();
            this.dialogRef.close('postagem atualizada');
            location.reload();
          },
          error: () => {
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
