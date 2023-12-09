import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro.component';

@Component({
  selector: 'app-empregador',
  templateUrl: './empregador.component.html',
  styleUrls: ['../cadastro.component.css']
})
export class EmpregadorComponent extends CadastroComponent {
  override ngOnInit() {
    super.ngOnInit();
    this.formularioCadastro.addControl('cnpj', this.formBuilder.control(''));
    this.formularioCadastro.get('cnpj')?.valueChanges.subscribe(cnpj => {
      CadastroComponent.codigos = [1, 4];
      CadastroComponent.cnpjNumber = cnpj;
    });
  }
}