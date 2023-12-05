import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { environment } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    private readonly API = `${environment.API_URL}/perfil`

    constructor(private http: HttpClient) { }

    criarUsuario(usuario: Usuario) {
      return this.http.post<Usuario>(this.API, usuario)
      .pipe(map((res:any) => {
        if (res === null) {
          throw new Error('Email ja cadastrado');
        }else {
          return res;
        }
      }))
    }

    listarUsuarios(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.API)
    }

    listarUsuario(usuario: Usuario): Observable<Usuario> {
      const url = `${this.API}/${usuario.id}`
      return this.http.get<Usuario>(url)
    }

    editarUsuario(usuario: Usuario): Observable<Usuario> {
      const url = `${this.API}/${usuario.id}`;
      return this.http.put<Usuario>(url, usuario);
    }

    excluirUsuario(id: number): Observable<Usuario> {
      const url = `${this.API}/${id}`
      return this.http.delete<Usuario>(url)
    }

    buscarPorId(id: number): Observable<Usuario> {
      const url = `${this.API}/${id}`
      return this.http.get<Usuario>(url)
    }

    /*
    verificarCredenciais(email: string, senha: string): Observable<boolean> {
      return this.http.post<boolean>(`${this.API}/verificarCredenciais', { email, senha });
}
    */

}
