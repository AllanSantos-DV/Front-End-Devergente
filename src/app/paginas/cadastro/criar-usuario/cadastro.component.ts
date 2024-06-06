import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import * as moment from 'moment';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DialogComponent } from 'src/app/dialogComponent/DialogComponent';
import { CustomDateAdapter } from 'src/app/enviroments/data-customizada';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  public static codigos: Number[] = [];
  public static cnpjNumber: string = '';
  dataNascimento: Date | null = null;
  @Input() formularioCadastro!: FormGroup;

  constructor(protected formBuilder: FormBuilder, protected service: UsuarioService,
    private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    CadastroComponent.codigos = [0, 0];
    CadastroComponent.cnpjNumber = '';
    this.formularioCadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      username: new FormControl('', [Validators.required, Validators.pattern(/^[^\s]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
      confirmarSenha: new FormControl('', Validators.required),
      data_nascimento: new FormControl('', Validators.required)
    }, { validators: this.checkPasswords });
  }

  validateForm() {
    this.addControlsToForm();
  }

  addControlsToForm() {
    this.formularioCadastro.addControl('tipo_perfil',
    this.formBuilder.control(CadastroComponent.codigos[1], [Validators.required, Validators.min(1)]));
    this.formularioCadastro.addControl('codigo',
    this.formBuilder.control(CadastroComponent.codigos[0], [Validators.required, Validators.min(1)]));
    this.formularioCadastro.addControl('cnpj',
    this.formBuilder.control(CadastroComponent.cnpjNumber));
  }

  checkPasswords(control: AbstractControl): ValidationErrors | null {
    const group = control as FormGroup;
    const senha = group.controls['senha'];
    const confirmarSenha = group.controls['confirmarSenha'];

    return senha.value === confirmarSenha.value ? null : { notSame: true };
  }

  cadastroUsuario() {
    this.validateForm();
    let usuario = this.prepararUsuario();
    if (this.formularioCadastro.valid && (usuario.tipo_perfil !== 4 || usuario.cnpj !== '')) {
      this.criarUsuario(usuario);
    } else {
      this.mostrarMensagemErro();
    }
    this.removerControlesDoFormulario();
  }

  prepararUsuario() {
    let dataNascimento = moment(this.formularioCadastro.value.data_nascimento, "DD-MM-YYYY");
    let dataFormatada = new Date(dataNascimento.year(), dataNascimento.month(), dataNascimento.date());
    return { ...this.formularioCadastro.value, data_nascimento: dataFormatada };
  }

  criarUsuario(usuario: any) {
    console.log(usuario);
    this.service.criarUsuario(this.formularioCadastro.value).subscribe({
      next: (res: any) => {
        this.mostrarMensagemSucesso();
        this.formularioCadastro.reset();
        this.router.navigate(['login']);
      },
      error: (err: Error) => {
        this.dialog.open(DialogComponent, {
          data: { message: err.message }
        });
      }
    });
  }

  mostrarMensagemSucesso() {
    this.dialog.open(DialogComponent, {
      data: { message: "Cadastro realizado com sucesso!" }
    });
  }

  mostrarMensagemErro() {
    this.dialog.open(DialogComponent, {
      data: { message: "Por favor, preencha o formulário corretamente antes de enviar." }
    });
  }

  removerControlesDoFormulario() {
    this.formularioCadastro.removeControl('tipo_perfil');
    this.formularioCadastro.removeControl('codigo');
    this.formularioCadastro.removeControl('cnpj');
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
