export interface Usuario {
    id?: number,
    nome: string,
    username: string,
    email?: string,
    senha?: string,
    data_nascimento?: Date | null,
    tipo_perfil?: number,
    img_perfil?: string,
    img_capa?: string,
    bio?: string 
}