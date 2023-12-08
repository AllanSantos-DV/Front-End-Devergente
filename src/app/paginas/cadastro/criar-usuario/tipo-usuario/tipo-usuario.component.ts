import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DialogComponent } from 'src/app/dialogComponent/DialogComponent';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent {
  public formularioUsuario!: FormGroup;
  selectedControl: FormControl | null = null;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.formularioUsuario = this.formBuilder.group({
      neurodivergente: new FormControl(false),
      familiar: new FormControl(false),
      profissional: new FormControl(false),
      empregador: new FormControl(false)
    });

    Object.keys(this.formularioUsuario.controls).forEach(key => {
      const control = this.formularioUsuario.controls[key] as FormControl;
      control.valueChanges.subscribe(() => {
        if (control.value && this.selectedControl && this.selectedControl !== control) {
          this.selectedControl.setValue(false, { emitEvent: false });
        }
        this.selectedControl = control.value ? control : null;
      });
    });
  };

  tipoUsuario() {
    const tipos = ['neurodivergente', 'familiar', 'profissional', 'empregador'];
    const tipoUsuario = tipos.find(tipo => this.formularioUsuario.value[tipo]);
    if (tipoUsuario) this.router.navigate(['criar-usuario/', tipoUsuario]);
    else this.dialog.open(DialogComponent, { data: { message: "Selecione um tipo de usuário!" } });
  }

  cancelar() {
    this.router.navigate(['bem-vindo'])
  }
}
