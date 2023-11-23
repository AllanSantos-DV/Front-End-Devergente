import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculumService } from 'src/app/services/curriculum.service';
import * as moment from 'moment';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { tap, switchMap } from 'rxjs/operators';
import { empty } from 'rxjs';
import { Curriculum } from 'src/app/interfaces/curriculum';

@Component({
  selector: 'app-editar-curriculum',
  templateUrl: './editar-curriculum.component.html',
  styleUrls: ['./editar-curriculum.component.css']
})
export class EditarCurriculumComponent {

  curriculum: Curriculum = {
    id: 0,
    usuario: {
      nome: '',
      username: '',
      imagemUrl: ''
    },
    endereco: {
      cep: null,
      logradouro: '',
      complemento: '',
      numero: '',
      referencia: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
    telefone: null,
    telefone2: null,
    area_interesse: '',
    habilidades: '',
    formacao: '',
    instituicao_ensino: '',
    experiencia_anterior: false,
    cargo: '',
    empresa: '',
    data_inicio: null,
    data_fim: null,
    resumo: ''
  }

  dataInicio: Date | null = null;
  dataFim: Date | null = null;

  public formularioCurriculum!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private curriculumService: CurriculumService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private cepService: ConsultaCepService) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.curriculumService.buscarPorId(parseInt(id!)).subscribe((curriculum) => {
      this.curriculum = curriculum;
      console.log('data_inicio:', this.curriculum.data_inicio);
      console.log('data_fim:', this.curriculum.data_fim);
      console.log('Id:', this.curriculum.id);
      this.formularioCurriculum.patchValue(this.curriculum);
    });

    this.formularioCurriculum = this.formBuilder.group({
      usuario: this.formBuilder.group({
        nome: [''],
        username: [''],
      }),
      endereco: this.formBuilder.group({
        cep: ['', [Validators.required, Validators.maxLength(9), Validators.pattern(/^\d{5}-\d{3}$/)]],
        logradouro: ['', [Validators.required, Validators.maxLength(50)]],
        complemento: ['', [Validators.maxLength(50)]],
        numero: ['', [Validators.required, Validators.maxLength(5)]],
        referencia: ['', [Validators.required, Validators.maxLength(50)]],
        bairro: ['', [Validators.required, Validators.maxLength(50)]],
        cidade: ['', [Validators.required, Validators.maxLength(50)]],
        uf: ['', [Validators.required, Validators.maxLength(2)]]
      }),
      telefone: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      telefone2: ['', [Validators.pattern(/^\d{11}$/)]],
      area_interesse: ['', [Validators.required, Validators.maxLength(50)]],
      habilidades: ['', [Validators.required, Validators.maxLength(50)]],
      formacao: ['', [Validators.required]],
      instituicao_ensino: ['', [Validators.maxLength(50)]],
      experiencia_anterior: ['', [Validators.required]],
      cargo: ['', [Validators.maxLength(50)]],
      empresa: ['', [Validators.maxLength(50)]],
      data_inicio: [''],
      data_fim: [''],
      resumo: ['', [Validators.required, Validators.maxLength(500)]],
    });

    this.formularioCurriculum.get('endereco.cep')?.statusChanges
      .pipe(
        tap((value: any) => console.log('status CEP:', value)),
        switchMap((status: any) => status ? this.cepService.consultaCep(this.formularioCurriculum.get('endereco.cep')?.value) : empty())
      )
      .subscribe(dados => {
        console.log('resposta da requisição HTTP:', dados);
        this.insereDadosForm(dados);
      });
  }

  consultaCep(cep: string) {
    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep)
        .subscribe(dados => this.insereDadosForm(dados));
    }
  }

  insereDadosForm(dados: any) {
    this.formularioCurriculum.patchValue({
      endereco: {
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf
      }
    });
    console.log(dados);
  }

  editarCurriculum() {
    let dataInicio = moment(this.formularioCurriculum.value.data_inicio, "DD-MM-YYYY");
    let dataFim = moment(this.formularioCurriculum.value.data_fim, "DD-MM-YYYY");
    let dataFormatadaInicio = new Date(dataInicio.year(), dataInicio.month(), dataInicio.date());
    let dataFormatadaFim = new Date(dataFim.year(), dataFim.month(), dataFim.date());

    let formularioValue = {
      ...this.formularioCurriculum.value,
      id: this.curriculum.id, 
      data_inicio: dataFormatadaInicio,
      data_fim: dataFormatadaFim
    };

    this.curriculumService.editarCurriculum(formularioValue).subscribe((res: any) => {
      alert("Curriculum editado com sucesso!");
      this.formularioCurriculum.reset();
      this.router.navigate(['feed']);
    }, (err: Error) => {
      alert("Não foi possível realizar a atualização do seu curriculum: " + err.message);
    });
  }

  cancelar() {
    this.router.navigate(['feed'])
  }
}

