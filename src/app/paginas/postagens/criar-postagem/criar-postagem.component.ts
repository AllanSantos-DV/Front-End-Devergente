import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PostagensService } from 'src/app/services/postagens.service';

@Component({
  selector: 'app-criar-postagem',
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css']
})

  export class CriarPostagemComponent {
    postContent = '';
    postImage: File | null = null;
    postImageUrl: string | null = null;
  
    constructor(public dialogRef: MatDialogRef<CriarPostagemComponent>, private postagemService: PostagensService) {}
  
    onCancel(): void {
      this.dialogRef.close();
    }
  
    onSubmit(): void {
      const formData = new FormData();
      let Token = localStorage.getItem('token');
      if (this.postImage) {
        formData.append('image', this.postImage);
      }
      formData.append('token', Token!);
      formData.append('content', this.postContent);
      this.postagemService.criarPostagem(formData).subscribe(() => {
        this.dialogRef.close();
      }, error => {
        alert('Erro ao criar postagem');
        console.log(error);
      });
    }
  
    onImageChange(event: Event): void {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        this.postImage = file;
        this.postImageUrl = URL.createObjectURL(file);
      }else{
        this.postImage = null;
        this.postImageUrl = null;
      }
    }
  }
