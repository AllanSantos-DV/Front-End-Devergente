import { Usuario } from "./usuario";

export interface Empregador extends Usuario {
    id?: number,
    nome: string,
    username: string,
    email: string,
    senha: string,
    data_nascimento: Date,
    foto_perfil: Blob,
    tipo_perfil: string,
    cnpj: string 
}