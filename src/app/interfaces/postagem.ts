import { Usuario } from "./usuario";

export interface Postagem {
    id?: number,
    usuario: Usuario,
    conteudo: string,
    imagem?: Blob,
    data: Date;
}