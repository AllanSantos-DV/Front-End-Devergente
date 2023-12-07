// NeurodivergenteComponent
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CadastroComponent } from '../cadastro.component';

@Component({
  selector: 'app-neurodivergente',
  templateUrl: './neurodivergente.component.html',
  styleUrls: ['./neurodivergente.component.css']
})
export class NeurodivergenteComponent extends CadastroComponent {
  static codigoSelecionado: Number[];
    override ngOnInit() {
    super.ngOnInit();
    this.formularioCadastro.addControl('codigo', this.formBuilder.control('', Validators.required));
    this.formularioCadastro.get('codigo')?.valueChanges.subscribe(codigo => {
      NeurodivergenteComponent.codigoSelecionado = [Number(codigo), 1]
    });
  }
}