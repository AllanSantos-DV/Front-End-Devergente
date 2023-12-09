import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../enviroments/enviroments'
import { DialogComponent } from 'src/app/dialogComponent/DialogComponent';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  private readonly API = `${environment.API_URL}/login`

  public login!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
    })
  }

  loginUsuario() {
    if (this.login.invalid) {
      this.dialog.open(DialogComponent, {
        data: { message: 'Preecha todos os campos' },
      });
      return;
    }
    this.http.post(this.API, this.login.value, { observe: 'response' })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.headers.get('Authorization'));
          this.router.navigate(['/feed']).then(r => console.log(r));
        },
        error: (err: any) => {
          this.dialog.open(DialogComponent, {
            data: { message: 'Email ou senha incorretos' },
          });
        }
      })
  };
}
