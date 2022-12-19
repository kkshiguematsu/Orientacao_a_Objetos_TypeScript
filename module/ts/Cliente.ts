import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa{
    private vip: boolean
    constructor(nome,cpf,telefone,vip){
        super(nome,cpf,telefone)
        this.vip = vip
    }
}