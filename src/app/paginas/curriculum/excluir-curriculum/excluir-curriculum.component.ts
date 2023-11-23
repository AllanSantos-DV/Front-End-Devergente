import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curriculum } from 'src/app/interfaces/curriculum';
import { Usuario } from 'src/app/interfaces/usuario';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-excluir-curriculum',
  templateUrl: './excluir-curriculum.component.html',
  styleUrls: ['./excluir-curriculum.component.css']
})
export class ExcluirCurriculumComponent {

  public formularioExclusao!: FormGroup;

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

  usuario: Usuario = {
    id: 0,
    nome: '',
    username: '',
    imagemUrl: '',
    email: '',
    senha: '',
    data_nascimento: null,
    tipo_perfil: '',
    bio: ''
  }

  dataInicio: Date | null = null;
  dataFim: Date | null = null;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private curriculumService: CurriculumService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.curriculumService.buscarPorId(parseInt(id!)).subscribe((curriculum) => {
        this.curriculum = curriculum
      })
  
      this.formularioExclusao = this.formBuilder.group({
        id: [this.curriculum.id],
        email: ['', Validators.email],
        senha: ['', [
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      })
    };

  excluirConta() {
    if(this.curriculum.id) {
      this.curriculumService.excluirCurriculum(this.curriculum.id).subscribe(() => {
        alert('Curriculum excluído com sucesso')
        this.router.navigate(['feed'])
      })
    }
  }
}
