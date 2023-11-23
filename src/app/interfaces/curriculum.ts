import { Endereco } from "./endereco";
import { Usuario } from "./usuario";

export interface Curriculum {
    id?: number,
    usuario: Usuario,
    endereco: Endereco,
    telefone: number | null,
    telefone2?: number | null,
    area_interesse: string,
    habilidades: string,
    formacao: string,
    instituicao_ensino?: string,
    experiencia_anterior: boolean,
    cargo?: string,
    empresa?: string,
    data_inicio: Date | null,
    data_fim: Date | null,
    resumo: string
}