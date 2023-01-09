import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta {
    constructor(limite, numero) {
        super(numero);
        this.limite = limite;
    }
    transferir(contaDestino, valor, date) {
        this.sacar(valor, date);
        contaDestino.depositar(valor, date);
    }
    calcularSaldo() {
        const soma_credito = this.getSomaCredito();
        const soma_debito = this.getSomaDebito();
        let saldo = soma_credito - soma_debito;
        saldo += this.limite;
        return saldo;
    }
}
