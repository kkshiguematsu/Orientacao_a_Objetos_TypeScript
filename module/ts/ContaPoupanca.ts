import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(
        private rentabilidadeMensal: number,
        numero: string
    ){
        super(numero)
    }

    calacularRendimento(): number{
        const quantidade_creditos = this.getTamanhoCredito()
        const quantidade_debitos = this.getTamanhoDebito()

        const data_atual = new Date()

        const atual_ano = data_atual.getFullYear()
        const atual_mes = data_atual.getMonth()

        const anos = 0
        const meses = 0

        let rendimento = this.getDebito(0)


        

        return rendimento
    }

    calcularSaldo(): number{
        const soma_credito = this.getSomaCredito()
        const soma_debito = this.getSomaDebito()
        
        let saldo = soma_credito - soma_debito
        saldo += this.calacularRendimento()
        return saldo
    }
}