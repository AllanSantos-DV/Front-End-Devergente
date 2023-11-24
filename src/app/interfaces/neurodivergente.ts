import { Usuario } from "./usuario";

export interface Neurodivergente extends Usuario {
    id?: number,
    nome: string,
    username: string,
    imagemUrl: string;
    email?: string,
    senha?: string,
    data_nascimento?: Date | null,
    tipo_perfil?: 1,
    img_perfil?: string,
    img_capa?: string,
    bio?: string 
    tipo_neurodivergencia: number,
    laudo_neurodivergente: string,
}