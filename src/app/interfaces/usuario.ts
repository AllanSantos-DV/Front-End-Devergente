export interface Usuario {
    id?: number,
    nome: string,
    username: string,
    imagemUrl: string;
    email?: string,
    senha?: string,
    data_nascimento?: Date | null,
    tipo_perfil?: string,
    img_perfil?: string,
    img_capa?: string,
    bio?: string 
}