import { Credito } from "./Credito.js";
import { Debito } from "./Debito.js";

export abstract class Conta{
    private debitos: Debito[] = []
    private creditos: Credito[] = []
    constructor(
        private numero: string
    ){}
    
    getNumero(): string{
        return this.numero
    }

    getDebito(index: number): number{
        return this.debitos[index].getValor()
    }
    
    getCredito(index: number): number{
        return this.creditos[index].getValor()
    }

    getDataDebito(index: number): string{
        return this.debitos[index].getData().toDateString()
    }

    getDataCredito(index: number): string{
        return this.creditos[index].getData().toDateString()
    }

    getSomaDebito(): number{
        var soma: number = 0
        this.debitos.forEach(debito =>
            soma += debito.getValor()
        );
        return soma
    }

    getSomaCredito(): number{
        var soma: number = 0
        this.creditos.forEach(credito =>
            soma += credito.getValor()
        );
        return soma
    }

    getTamanhoCredito(): number{
        return this.creditos.length
    }
    
    getTamanhoDebito(): number{
        return this.debitos.length
    }

    listarDebitos(){
        this.debitos.forEach(debito =>{
            console.log(debito)
        });
    }

    listarCreditos(){
        this.creditos.forEach(credito =>{
            console.log(credito)
        });
    }

    depositar(valor: number, date: Date){
        const credito = new Credito(valor,date)
        this.creditos.push(credito)
    }

    sacar(valor: number, date: Date){
        const debito = new Debito(valor, date)
        if(debito.getValor() > this.getSomaCredito()){
            console.log("Valor nao pode ser sacado pois é superior ao saldo!")
        }else{
            this.debitos.push(debito)
        }
    }
}