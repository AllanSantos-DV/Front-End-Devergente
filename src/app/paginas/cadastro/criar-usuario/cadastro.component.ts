import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import * as moment from 'moment';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DialogComponent } from 'src/app/dialogComponent/DialogComponent';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {

  public static codigos: Number[] = [];
  dataNascimento: Date | null = null;
  @Input() formularioCadastro!: FormGroup;
  @Output() ngSubmit = new EventEmitter<void>();
  @Output() codigoSelecionado = new EventEmitter<string>();

  constructor(protected formBuilder: FormBuilder, protected service: UsuarioService,
    private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.formularioCadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      username: new FormControl('', [Validators.required, Validators.pattern(/^[^\s]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
      confirmarSenha: new FormControl('', Validators.required),
      data_nascimento: new FormControl('', Validators.required),
      tipo_perfil: new FormControl(0),
      codigo: new FormControl(0)
    }, { validators: this.checkPasswords });
  }

  checkPasswords(control: AbstractControl): ValidationErrors | null {
    const group = control as FormGroup;
    const senha = group.controls['senha'];
    const confirmarSenha = group.controls['confirmarSenha'];

    return senha.value === confirmarSenha.value ? null : { notSame: true };
  }

  cadastroUsuario() {
    this.formularioCadastro.value.codigo = CadastroComponent.codigos[0];
    this.formularioCadastro.value.tipo_perfil = CadastroComponent.codigos[1];
    let dataNascimento = moment(this.formularioCadastro.value.data_nascimento, "DD-MM-YYYY");
    let dataFormatada = new Date(dataNascimento.year(), dataNascimento.month(), dataNascimento.date());
    let usuario = { ...this.formularioCadastro.value, data_nascimento: dataFormatada };
    if (this.formularioCadastro.valid && usuario.codigo !== 0 && usuario.tipo_perfil !== 0) {
      console.log(usuario);
      this.service.criarUsuario(this.formularioCadastro.value).subscribe({
        next: (res: any) => {
          this.dialog.open(DialogComponent, {
            data: { message: "Cadastro realizado com sucesso!" }
          });
          this.formularioCadastro.reset();
          this.router.navigate(['login']);
        },
        error: (err: Error) => {
          this.dialog.open(DialogComponent, {
            data: { message: err.message }
          });
        }
      });
    } else {
      this.dialog.open(DialogComponent, {
        data: { message: "Por favor, preencha o formulário corretamente antes de enviar." }
      });
    }
  }

  cancelar() {
    CadastroComponent.codigos = [0, 0];
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