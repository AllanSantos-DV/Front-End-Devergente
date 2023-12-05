import { Usuario } from "./usuario";

export interface Familiar extends Usuario {
    imagemUrl: string;
    tipo_perfil?: 2,

    /* Tipo Familiar : 
    1 - Pai/Mãe
    2 - Filho/Filha
    3 - Irmão/Irmã
    4 - Marido/Esposa
    5 - Namorado/Namorada
    */
}