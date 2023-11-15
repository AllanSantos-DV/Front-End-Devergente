import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../../interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  public formularioCadastro!: FormGroup;

  diaSelecionado!: number;
  mesSelecionado!: number;
  anoSelecionado!: number;
  dias: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

  atualizarDias() {
    const numeroDias = this.numeroDiasNoMes(this.anoSelecionado, this.mesSelecionado);
    this.dias = Array.from({ length: numeroDias }, (_, i) => i + 1);
  }

  meses = [
    { nome: 'Janeiro', valor: 1 },
    { nome: 'Fevereiro', valor: 2 },
    { nome: 'Março', valor: 3 },
    { nome: 'Abril', valor: 4 },
    { nome: 'Maio', valor: 5 },
    { nome: 'Junho', valor: 6 },
    { nome: 'Julho', valor: 7 },
    { nome: 'Agosto', valor: 8 },
    { nome: 'Setembro', valor: 9 },
    { nome: 'Outubro', valor: 10 },
    { nome: 'Novembro', valor: 11 },
    { nome: 'Dezembro', valor: 12 },

  ];
  anos: number[] = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i); 

  numeroDiasNoMes(ano: number, mes: number): number {
    if (mes === 2) {
      // Verifica se o ano é bissexto
      if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return 29; // Ano bissexto, fevereiro tem 29 dias
      } else {
        return 28; // Ano comum, fevereiro tem 28 dias
      }
    } else if ([4, 6, 9, 11].includes(mes)) {
      return 30; // Meses com 30 dias
    } else {
      return 31; // Meses com 31 dias
    }
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.formularioCadastro = this.formBuilder.group ({
      nome: ['',[Validators.required]],
      username: ['',[Validators.required, 
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      email: ['',[Validators.required, Validators.email]],
      senha: ['',[Validators.required, 
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      data_nascimento: ['',[Validators.required]],
      foto_perfil: ['',[Validators.required]],
      tipo_perfil: ['', [Validators.required]] 
    })
  }

  cadastroUsuario() {
    this.http.post<Usuario>("http://localhost:3000/perfil", this.formularioCadastro.value)
    .subscribe(res => {
      alert("Cadastro realizado com sucesso!");
      this.formularioCadastro.reset();
      this.router.navigate(['login']);
      }, err => {
        alert("Não foi possível realizar o seu cadastro")
    })
  }
}
