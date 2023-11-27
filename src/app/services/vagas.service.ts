
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Vaga } from '../interfaces/vaga'; 
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private readonly API = `${environment.API_URL}/vaga`

  constructor(private http: HttpClient) { }

  criarVaga(vaga: Vaga) {
    return this.http.post<Vaga>(this.API, vaga)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  listarVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.API)
  } 

  listarVaga(vaga: Vaga): Observable<Vaga> {
    const url = `${this.API}/${vaga.id}`
    return this.http.get<Vaga>(url)
  }

  editarVaga(vaga: Vaga): Observable<Vaga> {
    const url = `${this.API}/${vaga.id}`; 
    return this.http.put<Vaga>(url, vaga);
  }

  excluirVaga(id: number): Observable<Vaga> {
    const url = `${this.API}/${id}`
    return this.http.delete<Vaga>(url)
  }

  buscarPorId(id: number): Observable<Vaga> {
    const url = `${this.API}/${id}`
    return this.http.get<Vaga>(url)
  }
}
