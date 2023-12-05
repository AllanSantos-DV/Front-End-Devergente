import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent {

  public formularioUsuario!: FormGroup;
  selectedControl: FormControl | null = null;

  constructor(private formBuilder: FormBuilder, 
    private service: UsuarioService, 
    private http: HttpClient, 
    private router: Router) {

  }

  ngOnInit() {
    this.formularioUsuario = this.formBuilder.group ({
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
  
    tipos.forEach(tipo => {
      if (this.formularioUsuario.get(tipo)?.value) {
        this.router.navigate([`criar-usuario/${tipo}`]);
      }
    });
  }
  
  cancelar() {
    this.router.navigate(['bem-vindo'])
  }
}
