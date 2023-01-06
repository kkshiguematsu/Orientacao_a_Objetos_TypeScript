import { Conta } from "./Conta.js";
import { Endereco } from "./Endereco.js";
import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa{
    private vip: boolean
    private enderecos: Endereco[] = []
    private contas: Conta[] = []
    constructor(nome:string, cpf:number, telefone:number, vip:boolean, endereco: Endereco, conta: Conta){
        super(nome,cpf,telefone)
        this.vip = vip
        this.enderecos.push(endereco)
        this.contas.push(conta)
    }

    adicionarEndereco(endereco: Endereco){
        this.enderecos.push(endereco)
    }
    
    adicionarConta(conta: Conta){
        this.contas.push(conta)
    }
    
    listarEndereco(){
        this.enderecos.forEach(endereco =>
            console.log(endereco)
        );
    }
}
// const endereco1 = new Endereco("aaa","bbb","ccc","ddd","eee","fff")
// const endereco2 = new Endereco("aaa","bbb","ccc","ddd","eee","fff")
// const endereco3 = new Endereco("aaa","bbb","ccc","ddd","eee","fff")
// const cliente = new Cliente("kassiano",123,456,true,endereco1)
// cliente.adicionarEndereco(endereco2)
// cliente.adicionarEndereco(endereco3)
// cliente.listarEndereco()
// console.log(cliente)