import { Usuario } from "./usuario";

export interface Postagem {
    id?: number,
    usuario: Usuario,
    conteudo: string,
    imagemUrl: string,
    data: Date;
}