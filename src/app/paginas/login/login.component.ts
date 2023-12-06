import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
    this.http.post(this.API, this.login.value, {observe: 'response'})
    .subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.headers.get('Authorization'));
        this.router.navigate(['/feed']).then(r => console.log(r));
      },
      error: (err: any) => {
        alert("Email ou senha incorretos");
      }
    })
  };
}
