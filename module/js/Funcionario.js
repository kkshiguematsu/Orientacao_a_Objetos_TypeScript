import { Pessoa } from "./Pessoa.js";
export class Funcionario extends Pessoa {
    constructor(nome, cpf, telefone, salario) {
        super(nome, cpf, telefone);
        this.salario = salario;
    }
    adicionaCargo(cargo) {
        this.cargo = cargo;
    }
}
