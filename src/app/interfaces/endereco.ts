export interface Endereco {
    cep: number,
    logradouro: string,
    complemento?: string,
    numero: string,
    referencia: string,
    bairro: string,
    cidade: string,
    uf: string
}