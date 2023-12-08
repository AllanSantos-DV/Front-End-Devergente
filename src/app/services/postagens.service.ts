import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Postagem } from '../interfaces/postagem';
import { environment } from '../enviroments/enviroments';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class PostagensService {
  [x: string]: any;

  private readonly API = `${environment.API_URL}/postagens`;

  novaPostagemCriada = new Subject<Postagem>();

  constructor(private http: HttpClient) { }

  listarPostagens(inicio: number, quantidade: number): Observable<Postagem[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    const url = `${this.API}/page=${inicio}&size=${quantidade}`;
    return this.http.get<Postagem[]>(url, { headers });
  }

  criarPostagem(postagem: FormData): Observable<Postagem> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.post<Postagem>(this.API, postagem, { headers });
  }

  editarPostagem(data: any, id: number): Observable<Postagem> {
    const url = `${this.API}/${id}`
    return this.http.put<Postagem>(url, data)
  }

  excluirPostagem(id: number): Observable<Postagem> {
    const url = `${this.API}/${id}`
    return this.http.delete<Postagem>(url)
  }

  buscarPorId(id: number): Observable<Postagem> {
    const url = `${this.API}/${id}`
    return this.http.get<Postagem>(url)
  }

  buscarPorUsuarioId(usuarioId: number): Observable<Postagem[]> {
    const url = `${this.API}?usuario.id=${usuarioId}`;
    return this.http.get<Postagem[]>(url);
  }
}
