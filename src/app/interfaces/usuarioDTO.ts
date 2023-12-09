import { Postagem } from "./postagem"
import { Comentario } from "./comentario"

export interface UsuarioDTO {
  id?: number,
  nome?: string,
  username?: string,
  img_perfil?: string,
  email?: string,
  postagens?: Postagem[]
  comentarios?: Comentario[]
}
