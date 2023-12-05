import { Usuario } from "./usuario";

export interface Profissional extends Usuario {
    registro_profissional: string
    imagemUrl: string;
    tipo_perfil?: 3,

    /* Tipo Profissional : 
    1 - Psicólogo;
    2 - Psiquiatra;
    3 - Outros;
    */
}