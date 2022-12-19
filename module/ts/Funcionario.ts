import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa{
    private salario: number
    constructor(nome:string, cpf:number, telefone:number,salario:number){
        super(nome,cpf,telefone)
        this.salario = salario
    }
}