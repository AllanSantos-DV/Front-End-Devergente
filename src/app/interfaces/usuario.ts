export interface Usuario {
    id?: number,
    nome?: string,
    username: string,
    email?: string,
    senha?: string,
    data_nascimento?: Date | null,
    img_perfil?: string,
    img_capa?: string,
    bio?: string 
    codigo?: number,
    tipo_perfil?: number

    /* Tipo Usuários : 
    1 - Neurodivergente;
    2 - Familiar;
    3 - Profissional;
    4 - Empregador;
    */
}