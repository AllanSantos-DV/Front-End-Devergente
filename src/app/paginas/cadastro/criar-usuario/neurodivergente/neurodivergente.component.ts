// NeurodivergenteComponent
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { CadastroComponent } from '../cadastro.component';

@Component({
  selector: 'app-neurodivergente',
  templateUrl: './neurodivergente.component.html',
  styleUrls: ['../cadastro.component.css']
})
export class NeurodivergenteComponent extends CadastroComponent {
  override ngOnInit() {
    super.ngOnInit();
    this.formularioCadastro.addControl('codigo', this.formBuilder.control('', Validators.required));
    this.formularioCadastro.get('codigo')?.valueChanges.subscribe(codigo => {
      CadastroComponent.codigos = [Number(codigo), 1];
    });
  }
}