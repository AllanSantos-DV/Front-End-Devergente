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
    path: 'criar-usuario',
    component: CadastroComponent
  },
  { 
    path: 'verificacao-email',
    component: VerificacaoEmailComponent
  },
  {
    path: 'feed',
    component: FeedPostagensComponent
  },
 { path: 'perfil/:id', 
   component: VerUsuarioComponent 
  },
  { path: 'editar-perfil/perfil/:id', 
  component: EditarUsuarioComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
