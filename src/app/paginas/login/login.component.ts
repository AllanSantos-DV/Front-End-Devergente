import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      senha: ['', [Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
    })
  }

  loginUsuario() {
    const loginData = {
      email: this.login.value.email,
      senha: this.login.value.senha
    };
  
    this.http.get<any[]>(`http://localhost:3000/perfil?email=${loginData.email}`)
      .subscribe(usuarios => {
        if (usuarios.length === 0) {
          alert("Usuário não encontrado");
        } else {
          const usuario = usuarios[0];
          if (usuario.senha === loginData.senha) {
            alert("Login realizado com sucesso");
            setTimeout(() => {
              this.router.navigate(['feed']);
            }, 3000);
          } else {
            alert("Sua senha está incorreta");
          }
        }
      });
  }
}
