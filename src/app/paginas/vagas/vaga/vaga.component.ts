import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curriculum } from 'src/app/interfaces/curriculum';
import { Vaga } from 'src/app/interfaces/vaga';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent {
  
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

  constructor(
    private vagaService: VagasService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.vagaService.buscarPorId(parseInt(id!)).subscribe((vaga) => {
      this.vaga = vaga;
      console.log('data_abertura: ', this.vaga.data_abertura);
      console.log('data_fechamento: ', this.vaga.data_fechamento);
    });
  }

  exibirVaga() {
    this.vagaService.listarVaga(this.vaga).subscribe((vaga) => {
      // Navegar para o perfil
      this.router.navigate(['/vaga', vaga.id]);
    });
  }

  voltar() {
    this.router.navigate(['/feed'])
  }
}
