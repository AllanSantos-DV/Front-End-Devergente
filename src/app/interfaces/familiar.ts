import { Usuario } from "./usuario";

export interface Familiar extends Usuario {
    id?: number,
    nome: string,
    username: string,
    email: string,
    senha: string,
    data_nascimento: Date,
    foto_perfil: Blob,
    tipo_perfil: string,
    filho: boolean,
    pai: boolean,
    conjuge: boolean,
    irmao: boolean,
    namorado: boolean
}