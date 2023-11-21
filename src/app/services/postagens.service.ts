import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../interfaces/postagem';
import { environment } from './../enviroments/enviroments';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

   private readonly API = `${environment.API_URL}/postagem`

   constructor(private http: HttpClient) { }
 
   listarPostagens(): Observable<Postagem[]> {
     return this.http.get<Postagem[]>(this.API)
   }
 
   criarPostagem(postagens: Postagem): Observable<Postagem> {
     return this.http.post<Postagem>(this.API, postagens)
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
}
