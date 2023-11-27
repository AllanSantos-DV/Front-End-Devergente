import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Vaga } from 'src/app/interfaces/vaga';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-editar-vaga',
  templateUrl: './editar-vaga.component.html',
  styleUrls: ['./editar-vaga.component.css']
})
export class EditarVagaComponent {

  vaga: Vaga = {
    id: 0,
    usuario: {
      id: 0,
      nome: '',
      username: '',
      img_perfil: '',
    },
    data_abertura: null,
    data_fechamento: null,
    titulo: '',
    descricao: '',
    requisitos: '',
    status_vaga: false,
    empresa: '',
  }

  dataFechamento: Date | null = null;

  public formularioEditarVaga!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private vagaService: VagasService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id')
    this.vagaService.buscarPorId(parseInt(id!)).subscribe((vaga) => {
      this.vaga = vaga;
      console.log('Id:', this.vaga.id);
      this.formularioEditarVaga.patchValue(this.vaga);
    });

    this.formularioEditarVaga = this.formBuilder.group({
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

  editarVaga() {
    let dataAbertura = new Date();
    let dataFechamento = moment(this.formularioEditarVaga.value.data_fechamento, "DD-MM-YYYY");
    let dataFormatadaAbertura = new Date(dataAbertura.getFullYear(), dataAbertura.getMonth(), dataAbertura.getDate());
    let dataFormatadaFechamento = new Date(dataFechamento.year(), dataFechamento.month(), dataFechamento.date());

    let formularioValue = {
      ...this.formularioEditarVaga.value,
      id: this.vaga.id,
      data_abertura: dataFormatadaAbertura,
      data_fechamento: dataFormatadaFechamento
    };

    this.vagaService.editarVaga(formularioValue).subscribe((res: any) => {
      alert("Vaga atualizada com sucesso!");
      this.formularioEditarVaga.reset();
      this.router.navigate(['feed']);
    }, (err: Error) => {
      alert("Não foi possível atualizar sua vaga: " + err.message);
    });
  }

  cancelar() {
    this.router.navigate(['feed'])
  }
}
