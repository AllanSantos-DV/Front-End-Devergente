import { Usuario } from "./usuario";

export interface Familiar extends Usuario {
    id?: number,
    nome: string,
    username: string,
    imagemUrl: string;
    email?: string,
    senha?: string,
    data_nascimento?: Date | null,
    tipo_perfil?: 2,
    img_perfil?: string,
    img_capa?: string,
    bio?: string 
    tipo_familiar: number
}