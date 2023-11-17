import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-postagem',
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css']
})
export class CriarPostagemComponent {

  imagemSelecionada!: File;

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
}
