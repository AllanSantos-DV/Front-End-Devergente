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
    .subscribe((res) => {
      const token = res.headers.get('Authorization')
      localStorage.setItem('token', token || '')
      this.router.navigate(['/feed'])
    }, (err) => {
      alert('Email ou senha incorretos')
    })
  };
}  