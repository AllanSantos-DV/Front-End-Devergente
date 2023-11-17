import { Endereco } from "./endereco";
import { Usuario } from "./usuario";

export interface Curriculum {
    id?: number,
    usuario: Usuario,
    endereco: Endereco,
    telefone: number,
    telefone2?: number,
    area_interesse: string,
    habilidades: string,
    formacao: string,
    instituicao_ensino?: string,
    experiencia_anterior: boolean,
    cargo?: string,
    empresa?: string,
    data_inicio: Date,
    data_fim: Date,
    resumo: string
}