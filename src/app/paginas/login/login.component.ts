import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { environment } from '../../enviroments/enviroments'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private readonly API = `${environment.API_URL}/login`

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

    this.http.post(this.API, loginData)
      .subscribe((response: any) => {
        if (response.success) {
          alert("Login realizado com sucesso");
          setTimeout(() => {
            this.router.navigate(['feed']);
          }, 3000);
        } else {
          alert(response.message);
        }
      });
  }
}  

