import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { JwtInterceptor } from './services/JwtInterceptor';
import { LoginComponent } from './paginas/login/login.component';
import { CustomDateAdapter } from './enviroments/data-customizada';
import { VagaComponent } from './paginas/vagas/vaga/vaga.component';
import { NavRodapeComponent } from './nav-rodape/nav-rodape.component';
import { BemVindoComponent } from './paginas/bem-vindo/bem-vindo.component';
import { NavCabecalhoComponent } from './nav-cabecalho/nav-cabecalho.component';
import { UsuarioComponent } from './paginas/cadastro/usuario/usuario.component';
import { VerVagasComponent } from './paginas/vagas/ver-vagas/ver-vagas.component';
import { PostagemComponent } from './paginas/postagens/postagem/postagem.component';
import { CriarVagaComponent } from './paginas/vagas/criar-vaga/criar-vaga.component';
import { CadastroComponent } from './paginas/cadastro/criar-usuario/cadastro.component';
import { EditarVagaComponent } from './paginas/vagas/editar-vaga/editar-vaga.component';
import { VerUsuarioComponent } from './paginas/cadastro/ver-usuario/ver-usuario.component';
import { ExcluirVagaComponent } from './paginas/vagas/excluir-vaga/excluir-vaga.component';
import { CurriculumComponent } from './paginas/curriculum/curriculum/curriculum.component';
import { ComentarioComponent } from './paginas/comentarios/comentario/comentario.component';
import { ResetSenhaComponent } from './paginas/reset-senha/reset-senha/reset-senha.component';
import { ComentariosComponent } from './paginas/comentarios/comentarios/comentarios.component';
import { FamiliarComponent } from './paginas/cadastro/criar-usuario/familiar/familiar.component';
import { EditarUsuarioComponent } from './paginas/cadastro/editar-usuario/editar-usuario.component';
import { CriarPostagemComponent } from './paginas/postagens/criar-postagem/criar-postagem.component';
import { VerCurriculumComponent } from './paginas/curriculum/ver-curriculum/ver-curriculum.component';
import { ExcluirUsuarioComponent } from './paginas/cadastro/excluir-usuario/excluir-usuario.component';
import { EmpregadorComponent } from './paginas/cadastro/criar-usuario/empregador/empregador.component';
import { TipoUsuarioComponent } from './paginas/cadastro/criar-usuario/tipo-usuario/tipo-usuario.component';
import { CriarCurriculumComponent } from './paginas/curriculum/criar-curriculum/criar-curriculum.component';
import { ProfissionalComponent } from './paginas/cadastro/criar-usuario/profissional/profissional.component';
import { EditarCurriculumComponent } from './paginas/curriculum/editar-curriculum/editar-curriculum.component';
import { ComentariosInputComponent } from './paginas/comentarios/comentarios-input/comentarios-input.component';
import { ExcluirCurriculumComponent } from './paginas/curriculum/excluir-curriculum/excluir-curriculum.component';
import { FeedPostagensComponent } from './paginas/postagens/feed-postagens/feed-postagens/feed-postagens.component';
import { VerificacaoEmailComponent } from './paginas/verificacao-email/verificacao-email/verificacao-email.component';
import { NeurodivergenteComponent } from './paginas/cadastro/criar-usuario/neurodivergente/neurodivergente.component';
import { CurriculumSimplificadoComponent } from './paginas/curriculum/curriculum-simplificado/curriculum-simplificado.component';
import { ComentariosInputEdicaoComponent } from './paginas/comentarios/comentarios-input-edicao/comentarios-input-edicao.component';

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
    ComentariosComponent,
    ComentarioComponent,
    ComentariosInputComponent,
    ComentariosInputEdicaoComponent
  ],
  imports: [
    ReactiveFormsModule,
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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
        },
        display: {
          dateInput: 'input',
          monthYearLabel: { year: 'numeric', month: 'short' },
          dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
          monthYearA11yLabel: { year: 'numeric', month: 'long' },
        }
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
