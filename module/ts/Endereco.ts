export class Endereco{
    constructor( 
        private cep: string,
        private logradouro: string,
        private numero: string,
        private complemento: string,
        private cidade: string,
        private uf: string 
    ){}
}