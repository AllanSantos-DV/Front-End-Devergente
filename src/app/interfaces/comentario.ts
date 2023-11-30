import { Postagem } from "./postagem";
import { Usuario } from "./usuario";

export interface Comentario {
    id?: number,
    postagem: Postagem;
    usuario: Usuario;
    conteudo: string,
    data: Date
}