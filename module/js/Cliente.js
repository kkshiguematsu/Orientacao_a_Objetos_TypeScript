import { Pessoa } from "./Pessoa.js";
export class Cliente extends Pessoa {
    constructor(nome, cpf, telefone, vip) {
        super(nome, cpf, telefone);
        this.vip = vip;
    }
}
