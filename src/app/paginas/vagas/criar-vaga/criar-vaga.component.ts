import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-criar-vaga',
  templateUrl: './criar-vaga.component.html',
  styleUrls: ['./criar-vaga.component.css']
})
export class CriarVagaComponent {
  dataFechamento: Date | null = null;

  public formularioVaga!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private vagaService: VagasService,
    private http: HttpClient,
    private router: Router) {

  }

  ngOnInit() {

    this.formularioVaga = this.formBuilder.group({
      usuario: this.formBuilder.group({
        id: [''],
        nome: [''],
        username: [''],
        img_perfil: [''],
      }),
      data_abertura: [''],
      data_fechamento: [''],
      titulo: ['', [Validators.required, Validators.maxLength(50)]],
      descricao: ['', [Validators.required, Validators.maxLength(512)]],
      requisitos: ['', [Validators.required, Validators.maxLength(512)]],
      status_vaga: [false],
      empresa: ['', [Validators.required, Validators.maxLength(128)]]
    });
  }

  cadastroVaga() {
    let dataAbertura = new Date();
    let dataFechamento = moment(this.formularioVaga.value.data_fechamento, "DD-MM-YYYY");
    let dataFormatadaAbertura = new Date(dataAbertura.getFullYear(), dataAbertura.getMonth(), dataAbertura.getDate());
    let dataFormatadaFechamento = new Date(dataFechamento.year(), dataFechamento.month(), dataFechamento.date());

    let formularioValue = {
      ...this.formularioVaga.value,
      data_abertura: dataFormatadaAbertura,
      data_fechamento: dataFormatadaFechamento
    };

    this.vagaService.criarVaga(formularioValue).subscribe((res: any) => {
      alert("Vaga criada com sucesso!");
      this.formularioVaga.reset();
      this.router.navigate(['feed']);
    }, (err: Error) => {
      alert("Não foi possível realizar o cadastro da sua vaga: " + err.message);
    });
  }

  cancelar() {
    this.router.navigate(['feed'])
  }
}
