import { Pessoa } from "./Pessoa.js";
export class Cliente extends Pessoa {
    constructor(nome, cpf, telefone, vip, endereco, conta) {
        super(nome, cpf, telefone);
        this.enderecos = [];
        this.contas = [];
        this.vip = vip;
        this.enderecos.push(endereco);
        this.contas.push(conta);
    }
    adicionarEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    listarEndereco() {
        this.enderecos.forEach(endereco => console.log(endereco));
    }
}
