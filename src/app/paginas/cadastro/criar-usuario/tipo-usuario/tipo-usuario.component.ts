import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { validadorUnicaSelecao } from 'src/app/enviroments/unica-selecao';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent {

  public formularioUsuario!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private service: UsuarioService, 
    private http: HttpClient, 
    private router: Router) {

  }

  ngOnInit() {
    this.formularioUsuario = this.formBuilder.group ({
      neurodivergente: [false],
      familiar: [false],
      profissional: [false],
      empregador: [false]
    }, { validators: validadorUnicaSelecao });
  };

  tipoUsuario() {
    let neurodivergente = this.formularioUsuario.get('neurodivergente')?.value;
    let familiar = this.formularioUsuario.get('familiar')?.value;
    let profissional = this.formularioUsuario.get('profissional')?.value;
    let empregador = this.formularioUsuario.get('empregador')?.value;
  
    if (this.formularioUsuario.errors?.['multipleSelection']) {
      window.alert('Não foi possível prosseguir, pois houve mais de uma opção selecionada');
      location.reload();
      return;
    }
  
    if (neurodivergente) {
      this.router.navigate(['criar-usuario/neurodivergente']);
    } else if (familiar) {
      this.router.navigate(['criar-usuario/familiar']);
    } else if (profissional) {
      this.router.navigate(['criar-usuario/profissional']);
    } else if (empregador) {
      this.router.navigate(['criar-usuario/empregador']);
    }
  }

  cancelar() {
    this.router.navigate(['bem-vindo'])
  }
}
