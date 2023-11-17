import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  public formularioCadastro!: FormGroup;

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

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.usuarioService.buscarPorId(parseInt(id!)).subscribe((usuario) => {
      this.usuario = usuario
    })

    this.formularioCadastro = this.formBuilder.group ({
      nome: ['',[Validators.required]],
      username: ['',[Validators.required, 
        Validators.pattern(/^[^\s]*$/)]],
      email: ['',[Validators.required, Validators.email]],
      senha: ['',[Validators.required, 
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      data_nascimento: ['',[Validators.required]],
      foto_perfil: ['',[Validators.required]],
      tipo_perfil: ['', [Validators.required]] 
    })
  };

  editarUsuario() {
    let newDate: moment.Moment = moment.utc(this.formularioCadastro.value.data_nascimento).local();
    this.formularioCadastro.value.data_nascimento = newDate.format("YYYY-MM-DD");

    this.usuarioService.editarUsuario(this.formularioCadastro.value).subscribe((res: any) => {
      alert("Usuário atualizado com sucesso!");
      this.formularioCadastro.reset();
      this.router.navigate(['perfil/:id']);
    }, (err: Error) => {
      alert("Não foi possível atualizar o usuário")
    });
  }
}
