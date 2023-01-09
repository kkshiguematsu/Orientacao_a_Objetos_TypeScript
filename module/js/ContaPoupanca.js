import { Conta } from "./Conta.js";
export class ContaPoupanca extends Conta {
    constructor(rentabilidadeMensal, numero) {
        super(numero);
        this.rentabilidadeMensal = rentabilidadeMensal;
    }
    calacularRendimento() {
        function modificar_rendimento(valor) {
            return;
        }
        const data_atual = new Date();
        const atual_ano = data_atual.getFullYear();
        const atual_mes = data_atual.getMonth();
        let anos_credito = 0;
        let mes_credito = 0;
        let anos_debito = 0;
        let mes_debito = 0;
        let saldo_temporario = this.getCredito(0);
        let rendimento = 0;
        let ultima_data = new Date(this.getDataCredito(0));
        let contador_credito = 1, contador_debito = 0;
        rendimento = (saldo_temporario * this.rentabilidadeMensal);
        saldo_temporario += rendimento;
        console.log("Rendimento primeiro mes: " + saldo_temporario);
        console.log("====================");
        console.log(this.getTamanhoCredito());
        console.log(this.getTamanhoDebito());
        while (true) {
            const data_debito = new Date(this.getDataDebito(contador_debito));
            const data_credito = new Date(this.getDataCredito(contador_credito));
            anos_debito = atual_ano - data_debito.getFullYear();
            anos_credito = atual_ano - data_credito.getFullYear();
            mes_credito = data_credito.getMonth();
            mes_debito = data_debito.getMonth();
            console.log("mes credito: " + mes_credito);
            console.log("mes debito: " + mes_debito);
            if (mes_debito < mes_credito) {
                const diferenca_meses = mes_debito - ultima_data.getMonth();
                for (let i = 0; i < diferenca_meses; i++) {
                    rendimento = (saldo_temporario * this.rentabilidadeMensal);
                    saldo_temporario += rendimento;
                    console.log("rendimento: " + rendimento);
                }
                saldo_temporario -= this.getDebito(contador_debito);
                console.log("rendimento total debito: " + saldo_temporario);
                console.log("====================");
                ultima_data = data_debito;
                contador_debito += 1;
                if (contador_debito == this.getTamanhoDebito()) {
                    while (contador_credito < this.getTamanhoCredito()) {
                        const diferenca_meses = mes_credito - ultima_data.getMonth();
                        for (let i = 0; i < diferenca_meses; i++) {
                            rendimento = (saldo_temporario * this.rentabilidadeMensal);
                            saldo_temporario += rendimento;
                            console.log("rendimento: " + rendimento);
                            console.log("aaaaaaaaa");
                        }
                        saldo_temporario += this.getCredito(contador_credito);
                        console.log("rendimento total credito: " + saldo_temporario);
                        console.log("====================");
                        ultima_data = data_credito;
                        contador_credito += 1;
                    }
                    break;
                }
            }
            else {
                const diferenca_meses = mes_credito - ultima_data.getMonth();
                for (let i = 0; i < diferenca_meses; i++) {
                    rendimento = (saldo_temporario * this.rentabilidadeMensal);
                    saldo_temporario += rendimento;
                    console.log("rendimento: " + rendimento);
                }
                saldo_temporario += this.getCredito(contador_credito);
                console.log("rendimento total credito: " + saldo_temporario);
                console.log("====================");
                ultima_data = data_credito;
                contador_credito += 1;
                if (contador_credito == this.getTamanhoCredito()) {
                    while (contador_debito < this.getTamanhoDebito()) {
                        const diferenca_meses = mes_debito - ultima_data.getMonth();
                        for (let i = 0; i < diferenca_meses; i++) {
                            rendimento = (saldo_temporario * this.rentabilidadeMensal);
                            saldo_temporario += rendimento;
                            console.log("rendimento: " + rendimento);
                        }
                        saldo_temporario += this.getDebito(contador_debito);
                        console.log("rendimento total credito: " + saldo_temporario);
                        console.log("====================");
                        ultima_data = data_credito;
                        contador_debito += 1;
                        break;
                    }
                }
            }
        }
        return rendimento;
    }
    calcularSaldo() {
        const soma_credito = this.getSomaCredito();
        const soma_debito = this.getSomaDebito();
        let saldo = soma_credito - soma_debito;
        saldo += this.calacularRendimento();
        return saldo;
    }
}
const conta_poupanca = new ContaPoupanca(0.01, "888");
conta_poupanca.depositar(200, new Date("01/01/2022"));
conta_poupanca.depositar(200, new Date("02/01/2022"));
conta_poupanca.depositar(200, new Date("03/01/2022"));
conta_poupanca.depositar(200, new Date("04/01/2022"));
conta_poupanca.sacar(100, new Date("03/05/2022"));
conta_poupanca.sacar(100, new Date("02/05/2022"));
console.log("Saldo da conta: " + conta_poupanca.calcularSaldo());
