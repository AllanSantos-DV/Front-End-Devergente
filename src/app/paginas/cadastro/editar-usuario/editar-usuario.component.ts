import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as moment from 'moment';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  public formularioAtualizacao!: FormGroup;

  usuario: Usuario = {
    id: 0,
    nome: '',
    username: '',
    imagemUrl: '',
    email: '',
    senha: '',
    data_nascimento: null,
    tipo_perfil: '',
    bio: '' 
  }

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID recuperado da rota:', id); 
    this.usuarioService.buscarPorId(parseInt(id!)).subscribe((usuario) => {
      console.log('Usuário recuperado do serviço:', usuario); 
      this.usuario = usuario;
    });

    this.formularioAtualizacao = this.formBuilder.group ({
      id: [this.usuario.id],
      nome: [''],
      username: [[''], [Validators.pattern(/^[^\s]*$/)]],
      email: ['', Validators.email],
      senha: ['',[ 
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      data_nascimento: [''],
      foto_perfil: '',
      tipo_perfil: '',
    })
  };

  editarUsuario() {
    let newDate: moment.Moment = moment.utc(this.formularioAtualizacao.value.data_nascimento).local();
    this.formularioAtualizacao.value.data_nascimento = newDate.format("YYYY-MM-DD");

    this.usuarioService.editarUsuario(this.usuario).subscribe((res: any) => {
      alert("Perfil atualizado com sucesso!");
      this.formularioAtualizacao.reset();
      this.router.navigate(['/perfil', this.usuario.id]);
    }, (err: Error) => {
      alert("Não foi possível atualizar o seu perfil")
    });
  }

  cancelar() {
    this.router.navigate(['/perfil', this.usuario.id])
  }

  excluirUsuario() {
    this.router.navigate(['/excluir-perfil', this.usuario.id])
  }
}