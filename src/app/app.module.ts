import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoComponent } from './paginas/bem-vindo/bem-vindo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { NavCabecalhoComponent } from './nav-cabecalho/nav-cabecalho.component';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroComponent } from './paginas/cadastro/criar-usuario/cadastro.component';
import { ResetSenhaComponent } from './paginas/reset-senha/reset-senha/reset-senha.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerificacaoEmailComponent } from './paginas/verificacao-email/verificacao-email/verificacao-email.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UsuarioComponent } from './paginas/cadastro/usuario/usuario.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter  } from './enviroments/data-customizada';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FeedPostagensComponent } from './paginas/postagens/feed-postagens/feed-postagens/feed-postagens.component';
import { CriarPostagemComponent } from './paginas/postagens/criar-postagem/criar-postagem.component';
import { MatCardModule } from '@angular/material/card';
import { VerUsuarioComponent } from './paginas/cadastro/ver-usuario/ver-usuario.component';
import { UsuarioService } from './services/usuario.service';
import { Routes } from '@angular/router';
import { EditarUsuarioComponent } from './paginas/cadastro/editar-usuario/editar-usuario.component';
import { ExcluirUsuarioComponent } from './paginas/cadastro/excluir-usuario/excluir-usuario.component';
import { NavRodapeComponent } from './nav-rodape/nav-rodape.component';
import { NeurodivergenteComponent } from './paginas/cadastro/criar-usuario/neurodivergente/neurodivergente.component';
import { FamiliarComponent } from './paginas/cadastro/criar-usuario/familiar/familiar.component';
import { ProfissionalComponent } from './paginas/cadastro/criar-usuario/profissional/profissional.component';
import { EmpregadorComponent } from './paginas/cadastro/criar-usuario/empregador/empregador.component';
import { CriarVagaComponent } from './paginas/vagas/criar-vaga/criar-vaga.component';
import { VerVagasComponent } from './paginas/vagas/ver-vagas/ver-vagas.component';
import { EditarVagaComponent } from './paginas/vagas/editar-vaga/editar-vaga.component';
import { ExcluirVagaComponent } from './paginas/vagas/excluir-vaga/excluir-vaga.component';
import { VagaComponent } from './paginas/vagas/vaga/vaga.component';
import { TipoUsuarioComponent } from './paginas/cadastro/criar-usuario/tipo-usuario/tipo-usuario.component';
import { PostagemComponent } from './paginas/postagens/postagem/postagem.component';
import { CriarCurriculumComponent } from './paginas/curriculum/criar-curriculum/criar-curriculum.component';
import { EditarCurriculumComponent } from './paginas/curriculum/editar-curriculum/editar-curriculum.component';
import { VerCurriculumComponent } from './paginas/curriculum/ver-curriculum/ver-curriculum.component';
import { ExcluirCurriculumComponent } from './paginas/curriculum/excluir-curriculum/excluir-curriculum.component';
import { CurriculumComponent } from './paginas/curriculum/curriculum/curriculum.component';
import { CurriculumSimplificadoComponent } from './paginas/curriculum/curriculum-simplificado/curriculum-simplificado.component';

@NgModule({
  declarations: [
    AppComponent,
    BemVindoComponent,
    NavCabecalhoComponent,
    LoginComponent,
    CadastroComponent,
    ResetSenhaComponent,
    VerificacaoEmailComponent,
    UsuarioComponent,
    FeedPostagensComponent,
    CriarPostagemComponent,
    VerUsuarioComponent,
    EditarUsuarioComponent,
    ExcluirUsuarioComponent,
    NavRodapeComponent,
    NeurodivergenteComponent,
    FamiliarComponent,
    ProfissionalComponent,
    EmpregadorComponent,
    CriarVagaComponent,
    VerVagasComponent,
    EditarVagaComponent,
    ExcluirVagaComponent,
    VagaComponent,
    TipoUsuarioComponent,
    PostagemComponent,
    CriarCurriculumComponent,
    EditarCurriculumComponent,
    VerCurriculumComponent,
    ExcluirCurriculumComponent,
    CurriculumComponent,
    CurriculumSimplificadoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDialogModule,
    ImageCropperModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    { provide: MAT_DATE_FORMATS, useValue: {
      parse: {
        dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
      },
      display: {
        dateInput: 'input',
        monthYearLabel: {year: 'numeric', month: 'short'},
        dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
        monthYearA11yLabel: {year: 'numeric', month: 'long'},
      }
    }}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
