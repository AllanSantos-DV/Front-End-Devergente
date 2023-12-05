import { Usuario } from "./usuario";

export interface Neurodivergente extends Usuario {
    laudo_neurodivergente: string,
    imagemUrl: string;
    tipo_perfil?: 1,

    /* Tipo Neurodivergente : 
    1 - TEA;
    2 - TDAH;
    3 - Dislexia;
    4 - Tourette;
    5 - Outros;
    */
}