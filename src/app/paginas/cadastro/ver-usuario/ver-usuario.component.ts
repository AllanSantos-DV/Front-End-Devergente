import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent {

  usuario: Usuario = {
    id: 0,
    nome: '',
    username: '',
    email: '',
    senha: '',
    data_nascimento: null,
    tipo_perfil: '',
    bio: '' 
  }

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.usuarioService.buscarPorId(parseInt(id!)).subscribe((usuario) => {
      this.usuario = usuario
    })
  }

  exibirPerfil() {
    this.usuarioService.listarUsuario(this.usuario).subscribe(() => {
      this.router.navigate(['/perfil', this.usuario.id])
    })

  }

  cancelar() {
    this.router.navigate(['/feed'])
  }

  editarPerfil() {
    this.router.navigate(['/editar-perfil', this.usuario.id])
  }

}
