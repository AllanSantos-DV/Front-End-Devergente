import { Usuario } from "./usuario";

export interface Comentario {
    id?: number,
    usuario: Usuario;
    conteudo: string,
    data: Date
}