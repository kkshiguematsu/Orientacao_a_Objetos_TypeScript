import { Conta } from "./Conta.js";
import { Endereco } from "./Endereco.js";
import { Pessoa } from "./Pessoa.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

export class Cliente extends Pessoa{
    private vip: boolean
    private enderecos: Endereco[] = []
    private contas: (ContaCorrente | ContaPoupanca)[] = []
    constructor(nome:string, cpf:number, telefone:number, vip:boolean, endereco: Endereco, conta: ContaCorrente | ContaPoupanca){
        super(nome,cpf,telefone)
        this.vip = vip
        this.enderecos.push(endereco)
        this.contas.push(conta)
    }

    setEndereco(endereco: Endereco){
        this.enderecos.push(endereco)
    }

    getEndereco(index: number): Endereco{
        return this.enderecos[index]
    }
    
    setConta(conta: ContaCorrente | ContaPoupanca){
        this.contas.push(conta)
    }

    // getConta(numero_conta: string): Conta {
    //     this.contas.forEach(conta => {
    //         if(conta.getNumero() == numero_conta){
    //             return conta
    //         }
    //     });
    // }
    
    listarEndereco(){
        this.enderecos.forEach(endereco =>
            console.log(endereco)
        );
    }

    listarConsta(){
        this.contas.forEach(conta => { 
            console.log(conta)
        });
    }

    depositar(numero_conta: string, valor: number, date: Date){
        this.contas.forEach(conta => {
            if(conta.getNumero() == numero_conta){
                conta.depositar(valor,date)
                return
            }
        });
    }

    sacar(numero_conta: string, valor: number, date: Date){
        this.contas.forEach(conta => {
            if(conta.getNumero() == numero_conta){
                conta.sacar(valor,date)
                return
            }
        });
    }

    transferir(numero_conta: string, cliente: Cliente, numero_conta_destino: string, valor: number, date: Date){
        this.contas.forEach(conta_cliente =>{
            if(conta_cliente.getNumero() == numero_conta){
                if(conta_cliente instanceof ContaCorrente){
                    cliente.contas.forEach(conta_destino => {
                        if(conta_destino.getNumero() == numero_conta_destino){
                            conta_cliente.transferir(conta_destino,valor,date)
                        }
                    });
                }else{
                    console.log("Conta cliente nao é uma conta corrente.")
                }
            }else{
                console.log("Conta nao encontrada!")
            }
        });
    }
}
