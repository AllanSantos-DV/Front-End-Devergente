import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/interfaces/postagem';
import { PostagensService } from 'src/app/services/postagens.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  public formPostagem!: FormGroup;

  imagemSelecionada!: File;

  constructor(private formBuilder:FormBuilder, 
    private service: PostagensService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editar: Postagem,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CriarPostagemComponent>) {

  this.formPostagem = this.formBuilder.group ({
      id: [0],
      usuario: this.formBuilder.group({
        id: [0],
        nome: [''],
        username: [''],
      }), 
      conteudo: ['',[Validators.required, Validators.minLength(3)]],
      imagemUrl: ['', this.onPhotoSelected],
      data: [new Date().toLocaleString]
  });
}

  onPhotoSelected(onPhotoSelector: HTMLInputElement) {
    if (onPhotoSelector.files) {
      this.imagemSelecionada = onPhotoSelector.files[0];
      if(!this.imagemSelecionada) return;
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
    this.service.criarPostagem(this.formPostagem.value).subscribe((res: any) => {
      this.formPostagem.reset();
      this.dialogRef.close();
      this.router.navigate(['feed']);
    }, (err: Error) => {
      alert("Não foi possível criar sua postagem")
    });
  }

  editarPostagem(id: number) {
    this.dialog.open(CriarPostagemComponent,  {
      data:  { id: this.postagem.id },
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    console.log(this.editarPostagem);
  }
}
