import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CadastroComponent } from '../cadastro.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-neurodivergente',
  templateUrl: './neurodivergente.component.html',
  styleUrls: ['./neurodivergente.component.css']
})
export class NeurodivergenteComponent extends CadastroComponent {
  constructor(formBuilder: FormBuilder, service: UsuarioService, http: HttpClient, router: Router) {
    super(formBuilder, service, http, router);}
    
    override ngOnInit() {
      super.ngOnInit();
      this.formularioCadastro.addControl('tipo_perfil', new FormControl(1));
      this.formularioCadastro.addControl('codigo', new FormControl(0));

      this.service.tipo_perfil = 1;
      console.log(this.formularioCadastro.value);
  }
}

