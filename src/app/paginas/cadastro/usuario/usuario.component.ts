import { Component, Input } from '@angular/core';
import { Usuario } from '../../.././interfaces/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
    @Input() usuario: Usuario = {
      id: 0,
      nome: 'Eni Essi',
      username: 'EniEssi',
      email: 'teste@teste.com.br',
      senha: 'Teste@1234',
      data_nascimento: new Date('1990-10-19'),
      img_perfil: '',
      img_capa: '',
      bio: 'Teste teste'
    }; 
}
