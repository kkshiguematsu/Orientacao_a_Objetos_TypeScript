import { Credito } from "./Credito.js";
import { Debito } from "./Debito.js";
export class Conta {
    constructor(numero) {
        this.numero = numero;
        this.debitos = [];
        this.creditos = [];
    }
    getNumero() {
        return this.numero;
    }
    getDebito(index) {
        return this.debitos[index].getValor();
    }
    getCredito(index) {
        return this.creditos[index].getValor();
    }
    getDataDebito(index) {
        return this.debitos[index].getData().toDateString();
    }
    getDataCredito(index) {
        return this.creditos[index].getData().toDateString();
    }
    getSomaDebito() {
        var soma = 0;
        this.debitos.forEach(debito => soma += debito.getValor());
        return soma;
    }
    getSomaCredito() {
        var soma = 0;
        this.creditos.forEach(credito => soma += credito.getValor());
        return soma;
    }
    getTamanhoCredito() {
        return this.creditos.length;
    }
    getTamanhoDebito() {
        return this.debitos.length;
    }
    listarDebitos() {
        this.debitos.forEach(debito => {
            console.log(debito);
        });
    }
    listarCreditos() {
        this.creditos.forEach(credito => {
            console.log(credito);
        });
    }
    depositar(valor, date) {
        const credito = new Credito(valor, date);
        this.creditos.push(credito);
    }
    sacar(valor, date) {
        const debito = new Debito(valor, date);
        if (debito.getValor() > this.getSomaCredito()) {
            console.log("Valor nao pode ser sacado pois é superior ao saldo!");
        }
        else {
            this.debitos.push(debito);
        }
    }
}
