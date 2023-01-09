import { Conta } from "./Conta.js";
export class ContaPoupanca extends Conta {
    constructor(rentabilidadeMensal, numero) {
        super(numero);
        this.rentabilidadeMensal = rentabilidadeMensal;
    }
    calacularRendimento() {
        return;
    }
    calcularSaldo() {
        const soma_credito = this.getSomaCredito();
        const soma_debito = this.getSomaDebito();
        let saldo = soma_credito - soma_debito;
        return saldo;
    }
}
