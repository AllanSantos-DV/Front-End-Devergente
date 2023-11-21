import { Empregador } from "./empregador"

export interface Vaga {
    id?: number,
    empregador: Empregador,
    data_abertura: Date,
    titulo: string,
    empresa: string,
    atribuicoes: string
}