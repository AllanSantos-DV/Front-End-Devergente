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

  async enviarImagemPerfil(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
  
    const response = await this.http.post(this.SERVER_URL, formData, { responseType: 'text' })
      .toPromise();
    if (response !== undefined) {
      return response;
    } else {
      throw new Error('Resposta do servidor está undefined');
    }
  }

  async enviarImagemCapa(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
  
    const response = await this.http.post(this.SERVER_URL, formData, { responseType: 'text' })
      .toPromise();
    if (response !== undefined) {
      return response;
    } else {
      throw new Error('Resposta do servidor está undefined');
    }
  }

  async enviarImagemPost(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
  
    const response = await this.http.post(this.SERVER_URL_POST, formData, { responseType: 'text' })
      .toPromise();
    if (response !== undefined) {
      return response;
    } else {
      throw new Error('Resposta do servidor está undefined');
    }
  }
}
