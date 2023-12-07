import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { CadastroComponent } from '../cadastro.component';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['../cadastro.component.css']
})
export class ProfissionalComponent extends CadastroComponent {
  override ngOnInit() {
    super.ngOnInit();
    this.formularioCadastro.addControl('codigo', this.formBuilder.control('', Validators.required));
    this.formularioCadastro.get('codigo')?.valueChanges.subscribe(codigo => {
      CadastroComponent.codigos = [Number(codigo), 3];
    });
  }
}