// src/app/s3-upload.service.ts

import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class S3UploadService {

  private SERVER_URL = `${environment.API_URL}/perfil/upload`;
  private SERVER_URL_POST = `${environment.API_URL}/postagem/upload`;

  constructor(private http: HttpClient) { }

  enviarImagemPerfil(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
  
    return this.http.post(this.SERVER_URL, formData, { responseType: 'text' })
      .toPromise()
      .then(response => {
        if (response !== undefined) {
          return response;
        } else {
          throw new Error('Resposta do servidor está undefined');
        }
      });
  }

  enviarImagemCapa(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
  
    return this.http.post(this.SERVER_URL, formData, { responseType: 'text' })
      .toPromise()
      .then(response => {
        if (response !== undefined) {
          return response;
        } else {
          throw new Error('Resposta do servidor está undefined');
        }
      });
  }

  enviarImagemPost(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
  
    return this.http.post(this.SERVER_URL_POST, formData, { responseType: 'text' })
      .toPromise()
      .then(response => {
        if (response !== undefined) {
          return response;
        } else {
          throw new Error('Resposta do servidor está undefined');
        }
      });
  }
}
