export interface Endereco {
    cep: number | null,
    logradouro: string,
    complemento?: string,
    numero: string,
    referencia: string,
    bairro: string,
    cidade: string,
    uf: string
}