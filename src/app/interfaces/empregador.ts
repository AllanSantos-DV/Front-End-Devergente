import { Usuario } from "./usuario";

export interface Empregador extends Usuario {
    cnpj?: string 
    imagemUrl: string;
    tipo_perfil?: 4,
}