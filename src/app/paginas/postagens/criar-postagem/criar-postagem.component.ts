import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PostagensService } from 'src/app/services/postagens.service';
import { Postagem } from 'src/app/interfaces/postagem';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-criar-postagem',
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css']
})

export class CriarPostagemComponent {
  postContent = '';
  postImage: File | null = null;
  postImageUrl!: string;
  
  constructor(public dialogRef: MatDialogRef<CriarPostagemComponent>,
    private postagemService: PostagensService) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('conteudo', this.postContent);
    if (this.postImage) formData.append('image', this.postImage);
    formData.append('data', new Date().toISOString());
    this.postagemService.criarPostagem(formData).subscribe(
      (novaPostagem: Postagem) => {
        novaPostagem.imagemUrl = this.postImageUrl;
        console.log(novaPostagem)
        this.dialogRef.close();
        this.postagemService.novaPostagemCriada.next(novaPostagem);
      }, (err: any) => {
        alert('Erro ao criar postagem');
        console.log(err);
      });
  }

  onImageChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.postImage = file;
      this.postImageUrl = URL.createObjectURL(file);
    } else {
      this.postImage = null;
      this.postImageUrl = '';
    }
  }
}
