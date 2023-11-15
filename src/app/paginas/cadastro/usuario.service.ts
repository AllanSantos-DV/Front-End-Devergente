import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

    // OBS: MODIFICAR ESTA PARTE DEPOIS, COM OS PARÂMETROS DO BACKEND JAVA / SPRINGBOOT
    private readonly API = 'http://localhost:3000/perfil/'

    constructor(private http: HttpClient) { }
  
    criarUsuario(usuario: Usuario) {
      return this.http.post<Usuario>(this.API, usuario)
      .pipe(map((res:any) => {
        return res;
      }))
    }

    verUsuarios() {
      return this.http.get<Usuario>(this.API)
      .pipe(map((res:any) => {
        return res;
      }))
    }

    verUsuario(usuario: Usuario, id: number) {
      const url = `${this.API}/${usuario.id}`
      return this.http.get<Usuario>(this.API + id)
      .pipe(map((res:any) => {
        return res;
      }))
    }

    editarUsuario(usuario: Usuario, id: number) {
      const url = `${this.API}/${usuario.id}`
      return this.http.put<Usuario>(this.API, id)
      .pipe(map((res:any) => {
        return res;
      }))
    }

    deletarUsuario(usuario: Usuario, id: number) {
      const url = `${this.API}/${usuario.id}`
      return this.http.delete<Usuario>(this.API + id)
      .pipe(map((res:any) => {
        return res;
      }))
    }
}
