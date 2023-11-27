import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-excluir-usuario',
  templateUrl: './excluir-usuario.component.html',
  styleUrls: ['./excluir-usuario.component.css']
})
export class ExcluirUsuarioComponent {
  public formularioExclusaoUsuario!: FormGroup;

  usuario: Usuario = {
    id: 0,
    nome: '',
    username: '',
    img_perfil: '',
    email: '',
    senha: '',
    data_nascimento: null,
    bio: ''
  }

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.usuarioService.buscarPorId(parseInt(id!)).subscribe((usuario) => {
      this.usuario = usuario
    })

    this.formularioExclusaoUsuario = this.formBuilder.group({
      id: [this.usuario.id],
      email: ['', Validators.email],
      senha: ['', [
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
    })
  };

  excluirConta() {
    if (this.usuario.id) {
      this.usuarioService.excluirUsuario(this.usuario.id).subscribe(() => {
        alert('Conta excluída com sucesso')
        this.router.navigate(['bem-vindo'])
      })
    }
  }


  /*
  excluirConta(email: string, senha: string) {
  this.usuarioService.verificarCredenciais(email, senha).subscribe((resultado) => {
    if (resultado) {
      this.usuarioService.excluirUsuario(this.usuario.id).subscribe(() => {
        alert('Conta excluída com sucesso');
        this.router.navigate(['bem-vindo']);
      });
    } else {
      alert('E-mail ou senha incorretos');
    }
  });
}
  */
  cancelar() {
    this.router.navigate(['/perfil', this.usuario.id])
  }
}
