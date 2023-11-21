import { Usuario } from "./usuario";

export interface Neurodivergente extends Usuario {
    id?: number,
    nome: string,
    username: string,
    email: string,
    senha: string,
    data_nascimento: Date,
    foto_perfil: Blob,
    tipo_perfil: string,
    tea: boolean,
    tdah: boolean,
    dislexia: boolean,
    tourette: boolean,
    outros: boolean,
    laudo_neurodivergente: Blob,
    interesses: string[] 
}