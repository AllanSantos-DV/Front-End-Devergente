import { Empregador } from "./empregador"

export interface Vaga {
    id?: number,
    empregador: Empregador,
    titulo: string,
    empresa: string,
    atribuicoes: string,
    data: Date,
    senha: string,
    data_nascimento: Date,
    foto_perfil: Blob,
    tipo_perfil: string 
}