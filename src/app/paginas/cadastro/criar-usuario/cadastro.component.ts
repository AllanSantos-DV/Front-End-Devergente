import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {

  dataNascimento: Date | null = null;

  public formularioCadastro!: FormGroup;

  constructor(protected formBuilder: FormBuilder, protected service: UsuarioService, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.formularioCadastro = this.formBuilder.group({
      nome: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.pattern(/^[^\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      confirmarSenha: ['', [Validators.required]],
      data_nascimento: ['', [Validators.required]]
    }, { validator: this.checkPasswords });
  }
  
  checkPasswords(group: FormGroup) {
    let senha = group.get('senha')?.value || '';  
    let confirmarSenha = group.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { notSame: true };
  }
  

  cadastroUsuario() {
    //if (this.formularioCadastro.valid) {
      let dataNascimento = moment(this.formularioCadastro.value.data_nascimento, "DD-MM-YYYY");
      let dataFormatada = new Date(dataNascimento.year(), dataNascimento.month(), dataNascimento.date());
      let usuario = { ...this.formularioCadastro.value, data_nascimento: dataFormatada };
      console.log(usuario);

      console.log(this.formularioCadastro.value);
      this.service.criarUsuario(this.formularioCadastro.value).subscribe((res: any) => {
        alert("Cadastro realizado com sucesso!");
        this.formularioCadastro.reset();
        this.router.navigate(['login']);
      }, (err: Error) => {
        alert(err.message)
      });
    //} else {
    //  console.log(this.formularioCadastro.value);
    //  alert("Por favor, preencha o formulário corretamente antes de enviar.");
    //}
  }

  cancelar() {
    this.router.navigate(['bem-vindo'])
  }

  maiorIdade = (data: Date | null): boolean => {
    this.dataNascimento = data;
    if (data) {
      const dataAtual = new Date();
      const dataMinima = new Date(
        dataAtual.getFullYear() - 18,
        dataAtual.getMonth(),
        dataAtual.getDate()
      );
      return data <= dataMinima;
    }
    return false;
  };
}