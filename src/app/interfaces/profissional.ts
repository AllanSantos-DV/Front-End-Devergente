import { Usuario } from "./usuario";

export interface Profissional extends Usuario {
    id?: number,
    nome: string,
    username: string,
    imagemUrl: string;
    email?: string,
    senha?: string,
    data_nascimento?: Date | null,
    tipo_perfil?: 3,
    img_perfil?: string,
    img_capa?: string,
    bio?: string 
    tipo_profissional: number,
    registro_profissional: string

    /* Tipo Profissional : 
    1 - Psicólogo;
    2 - Psiquiatra;
    3 - Outros;
    */
}