import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Curriculum } from '../interfaces/curriculum';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  private readonly API = `${environment.API_URL}/curriculum`

  constructor(private http: HttpClient) { }

  criarCurriculum(cv: Curriculum) {
    return this.http.post<Curriculum>(this.API, cv)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  listarCurriculuns(): Observable<Curriculum[]> {
    return this.http.get<Curriculum[]>(this.API)
  } 

  listarCurriculum(cv: Curriculum): Observable<Curriculum> {
    const url = `${this.API}/${cv.id}`
    return this.http.get<Curriculum>(url)
  }

  editarCurriculum(cv: Curriculum): Observable<Curriculum> {
    const url = `${this.API}/${cv.id}`; 
    return this.http.put<Curriculum>(url, cv);
  }

  excluirCurriculum(id: number): Observable<Curriculum> {
    const url = `${this.API}/${id}`
    return this.http.delete<Curriculum>(url)
  }

  buscarPorId(id: number): Observable<Curriculum> {
    const url = `${this.API}/${id}`
    return this.http.get<Curriculum>(url)
  }
}
