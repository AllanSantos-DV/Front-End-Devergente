import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    // OBS: MODIFICAR ESTA PARTE DEPOIS, COM OS PARÂMETROS DO BACKEND JAVA / SPRINGBOOT
    private readonly API = 'http://localhost:3000/perfil/'

    constructor(private http: HttpClient) { }

    criarUsuario(usuario: Usuario) {
      return this.http.post<Usuario>(this.API, usuario)
      .pipe(map((res:any) => {
        return res;
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
      const url = `${this.API}/${usuario.id}`
      return this.http.put<Usuario>(url, usuario )
  
    }
  
    excluirUsuario(id: number): Observable<Usuario> {
      const url = `${this.API}/${id}`
      return this.http.delete<Usuario>(url)
    }
  
    buscarPorId(id: number): Observable<Usuario> {
      const url = `${this.API}/${id}`
      return this.http.get<Usuario>(url)
    }
  
}
