import { Cargo } from "./Cargo.js";
import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa{
    private salario: number
    private cargo: Cargo
    constructor(nome:string, cpf:number, telefone:number, salario:number){
        super(nome,cpf,telefone)
        this.salario = salario
    }

    adicionaCargo(cargo: Cargo){
        this.cargo = cargo
    }
}
