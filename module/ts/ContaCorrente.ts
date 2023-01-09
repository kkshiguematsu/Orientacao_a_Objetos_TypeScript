import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

export class ContaCorrente extends Conta{
    constructor(
        private limite: number,
        numero: string
    ){
        super(numero)
    }

    transferir(contaDestino: ContaCorrente | ContaPoupanca, valor: number, date: Date){
        this.sacar(valor,date)
        contaDestino.depositar(valor,date)
    }

    calcularSaldo(): number{
        const soma_credito = this.getSomaCredito()
        const soma_debito = this.getSomaDebito()
        
        let saldo = soma_credito - soma_debito
        saldo += this.limite
        return saldo
    }
}
