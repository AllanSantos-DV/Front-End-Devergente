import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CriarPostagemComponent } from '../paginas/postagens/criar-postagem/criar-postagem.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-rodape',
  templateUrl: './nav-rodape.component.html',
  styleUrls: ['./nav-rodape.component.css']
})
export class NavRodapeComponent {

  constructor(
    private dialog: MatDialog,
    private router: Router) {

  }

  inicio() {
    this.router.navigate(['/feed']).then(r => console.log(r));
  }

  criarPostagem() {
    this.dialog.open(CriarPostagemComponent);
  }

  perfilUsuario() {
    this.router.navigate(['/perfil/9']).then(r => console.log(r));
  }
}
