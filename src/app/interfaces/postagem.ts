import { UsuarioDTO } from "./usuarioDTO";

export interface Postagem {
    id?: number,
    usuario?: UsuarioDTO,
    conteudo?: string,
    imagemUrl?: string,
    image?: File
    data?: Date;
}
