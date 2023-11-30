import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario';
import { environment } from './../enviroments/enviroments';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private readonly API = `${environment.API_URL}/comentario`

  constructor(private http: HttpClient) { }

  listarComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.API)
  }

  criarComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.API, comentario)
  }

  editarComentario(data: any, id: number): Observable<Comentario> {
    const url = `${this.API}/${id}`
    return this.http.put<Comentario>(url, data)
  }

  excluirComentario(id: number): Observable<Comentario> {
    const url = `${this.API}/${id}`
    return this.http.delete<Comentario>(url)
  }

  buscarPorId(id: number): Observable<Comentario> {
   const url = `${this.API}/${id}`
   return this.http.get<Comentario>(url)
 }
}
