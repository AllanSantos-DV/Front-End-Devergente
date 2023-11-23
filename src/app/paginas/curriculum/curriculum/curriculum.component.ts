import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curriculum } from 'src/app/interfaces/curriculum';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
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

  constructor(
    private curriculumService: CurriculumService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.curriculumService.buscarPorId(parseInt(id!)).subscribe((curriculum) => {
      this.curriculum = curriculum;
      console.log('data_inicio:', this.curriculum.data_inicio);
      console.log('data_fim:', this.curriculum.data_fim);
    });
  }

  exibirPerfil() {
    this.curriculumService.listarCurriculum(this.curriculum).subscribe((curriculum) => {
      // Navegar para o perfil
      this.router.navigate(['/perfil', curriculum.id]);
    });
  }

  pronto() {
    this.router.navigate(['/feed'])
  }
}
