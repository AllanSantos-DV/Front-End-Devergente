import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemVindoComponent } from './paginas/bem-vindo/bem-vindo.component';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroComponent } from './paginas/cadastro/criar-usuario/cadastro.component';
import { ResetSenhaComponent } from './paginas/reset-senha/reset-senha/reset-senha.component';
import { VerificacaoEmailComponent } from './paginas/verificacao-email/verificacao-email/verificacao-email.component';
import { FeedPostagensComponent } from './paginas/postagens/feed-postagens/feed-postagens/feed-postagens.component';
import { VerUsuarioComponent } from './paginas/cadastro/ver-usuario/ver-usuario.component';
import { EditarUsuarioComponent } from './paginas/cadastro/editar-usuario/editar-usuario.component';
import { ExcluirUsuarioComponent } from './paginas/cadastro/excluir-usuario/excluir-usuario.component';
import { NavCabecalhoComponent } from './nav-cabecalho/nav-cabecalho.component';
import { EmpregadorComponent } from './paginas/cadastro/criar-usuario/empregador/empregador.component';
import { FamiliarComponent } from './paginas/cadastro/criar-usuario/familiar/familiar.component';
import { ProfissionalComponent } from './paginas/cadastro/criar-usuario/profissional/profissional.component';
import { NeurodivergenteComponent } from './paginas/cadastro/criar-usuario/neurodivergente/neurodivergente.component';
import { TipoUsuarioComponent } from './paginas/cadastro/criar-usuario/tipo-usuario/tipo-usuario.component';
import { CriarPostagemComponent } from './paginas/postagens/criar-postagem/criar-postagem.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bem-vindo',
    pathMatch: 'full'
  },
  {
    path: 'bem-vindo',
    component: BemVindoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset-senha',
    component: ResetSenhaComponent
  },
  {
    path: 'verificacao-email',
    component: VerificacaoEmailComponent
  },
  {
    path: 'tipo-perfil',
    component: TipoUsuarioComponent
  },
  {
    path: 'criar-usuario/empregador',
    component: EmpregadorComponent
  },
  {
    path: 'criar-usuario/familiar',
    component: FamiliarComponent
  },
  {
    path: 'criar-usuario/profissional',
    component: ProfissionalComponent
  },
  {
    path: 'criar-usuario/neurodivergente',
    component: NeurodivergenteComponent
  },
  {
    path: 'feed',
    component: FeedPostagensComponent
  },
  {
    path: 'perfil/:id',
    component: VerUsuarioComponent
  },
  {
    path: 'editar-perfil/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'excluir-perfil/:id',
    component: ExcluirUsuarioComponent
  },
  {
    path: 'criar-postagem',
    component: CriarPostagemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
