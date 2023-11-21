import { Usuario } from "./usuario";

export interface Profissional extends Usuario {
    id?: number,
    nome: string,
    username: string,
    email: string,
    senha: string,
    data_nascimento: Date,
    foto_perfil: Blob,
    tipo_perfil: string,
    psicologo: boolean,
    psiquiatra: boolean,
    outros: boolean,
    registro_profissional: Blob 
}