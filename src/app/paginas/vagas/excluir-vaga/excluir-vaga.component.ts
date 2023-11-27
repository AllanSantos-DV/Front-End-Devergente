import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { Vaga } from 'src/app/interfaces/vaga';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-excluir-vaga',
  templateUrl: './excluir-vaga.component.html',
  styleUrls: ['./excluir-vaga.component.css']
})
export class ExcluirVagaComponent {

  public formularioExclusaoVaga!: FormGroup;

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

  usuario: Usuario = {
    id: 0,
    nome: '',
    username: '',
    img_perfil: '',
    email: '',
    senha: '',
    data_nascimento: null,
    bio: ''
  }

  dataAbertura: Date | null = null;
  dataFechamento: Date | null = null;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private vagaService: VagasService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.vagaService.buscarPorId(parseInt(id!)).subscribe((vaga) => {
        this.vaga = vaga
      })
  
      this.formularioExclusaoVaga = this.formBuilder.group({
        id: [this.vaga.id],
        email: ['', Validators.email],
        senha: ['', [
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      })
    };

  excluirConta() {
    if(this.vaga.id) {
      this.vagaService.excluirVaga(this.vaga.id).subscribe(() => {
        alert('Vaga excluída com sucesso')
        this.router.navigate(['feed'])
      })
    }
  }
}
