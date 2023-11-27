import { Usuario } from "./usuario";

export interface Vaga {
    id?: number,
    usuario: Usuario,
    data_abertura: Date | null,
    data_fechamento: Date | null,
    titulo: string,
    descricao: string,
    requisitos: string,
    status_vaga: boolean,
    empresa: string,
}