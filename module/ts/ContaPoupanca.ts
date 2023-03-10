import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(
        private rentabilidadeMensal: number,
        numero: string
    ){
        super(numero)
    }

    calacularRendimento(): number{
        function modificar_saldo_temporario(mes: number, ultima_data: Date, ultimo_valor: number, rentabilidadeMensal: number): number{
            const diferenca_meses = mes - ultima_data.getMonth()
            for(let i=0; i < diferenca_meses; i++){
                rendimento = (ultimo_valor * rentabilidadeMensal)
                ultimo_valor += rendimento
                console.log("rendimento: "+rendimento)
            }
            return ultimo_valor
        }

        const data_atual = new Date()

        const atual_ano = data_atual.getFullYear()
        const atual_mes = data_atual.getMonth()

        let anos_credito = 0
        let mes_credito = 0
        let anos_debito = 0
        let mes_debito = 0

        let saldo_temporario = 0
        let rendimento = 0
        let ultima_data = new Date(this.getDataCredito(0))

        let contador_credito = 0, contador_debito = 0

        rendimento = (saldo_temporario * this.rentabilidadeMensal)
        saldo_temporario += rendimento
        console.log("Rendimento primeiro mes: "+ saldo_temporario)
        console.log("====================")

        console.log(this.getTamanhoDebito())        
        console.log(this.getTamanhoCredito())        

        while(true){
            if(this.getTamanhoDebito() == 0){
                while(contador_credito < this.getTamanhoCredito()){
                    const data_credito = new Date(this.getDataCredito(contador_credito))
                    console.log("Mes credito:"+data_credito.getMonth())

                    saldo_temporario = modificar_saldo_temporario(data_credito.getMonth(),ultima_data,saldo_temporario,this.rentabilidadeMensal)
                    saldo_temporario += this.getCredito(contador_credito)
                    console.log("rendimento total credito: "+saldo_temporario)
                    console.log("====================")

                    ultima_data = data_credito
                    contador_credito += 1
                }
                break
            }else if(this.getTamanhoCredito() == 0){
                while(contador_debito < this.getTamanhoDebito()){
                    const data_debito = new Date(this.getDataDebito(contador_debito))

                    saldo_temporario = modificar_saldo_temporario(data_debito.getMonth(),ultima_data,saldo_temporario,this.rentabilidadeMensal)
                    saldo_temporario += this.getDebito(contador_debito)
                    console.log("rendimento total credito: "+saldo_temporario)
                    console.log("====================")

                    ultima_data = data_debito
                    contador_debito += 1
                break
                }
            }
            const data_debito = new Date(this.getDataDebito(contador_debito))
            const data_credito = new Date(this.getDataCredito(contador_credito))

            // anos_debito = atual_ano - data_debito.getFullYear()
            // anos_credito = atual_ano - data_credito.getFullYear()

            // if(anos_credito != 0 || anos_debito != 0){ // Anos diferentes
                

            // }else{ // Anos iguais
                
            // }
            mes_credito = data_credito.getMonth()
            mes_debito = data_debito.getMonth()

            if(mes_debito < mes_credito){
                saldo_temporario = modificar_saldo_temporario(mes_debito,ultima_data,saldo_temporario,this.rentabilidadeMensal)
                saldo_temporario -= this.getDebito(contador_debito)
                console.log("rendimento total debito: "+saldo_temporario)
                console.log("====================")

                ultima_data = data_debito
                contador_debito += 1
            }else if(mes_debito > mes_credito){
                saldo_temporario = modificar_saldo_temporario(mes_credito,ultima_data,saldo_temporario,this.rentabilidadeMensal)
                saldo_temporario += this.getCredito(contador_credito)
                console.log("rendimento total credito: "+saldo_temporario)
                console.log("====================")

                ultima_data = data_credito
                contador_credito += 1
            }else{
                saldo_temporario = modificar_saldo_temporario(mes_credito,ultima_data,saldo_temporario,this.rentabilidadeMensal)
                saldo_temporario += this.getCredito(contador_credito)
                saldo_temporario -= this.getDebito(contador_debito)
                console.log("rendimento total credito: "+saldo_temporario)
                console.log("====================")

                ultima_data = data_credito
                contador_credito += 1
                contador_debito += 1
            }

            if(contador_debito == this.getTamanhoDebito()){
                while(contador_credito < this.getTamanhoCredito()){
                    const data_credito = new Date(this.getDataCredito(contador_credito))
                    console.log("Mes credito:"+data_credito.getMonth())

                    saldo_temporario = modificar_saldo_temporario(data_credito.getMonth(),ultima_data,saldo_temporario,this.rentabilidadeMensal)
                    saldo_temporario += this.getCredito(contador_credito)
                    console.log("rendimento total credito: "+saldo_temporario)
                    console.log("====================")

                    ultima_data = data_credito
                    contador_credito += 1
                }
                break
            }else if(contador_credito == this.getTamanhoCredito()){
                while(contador_debito < this.getTamanhoDebito()){
                    const data_debito = new Date(this.getDataDebito(contador_debito))

                    saldo_temporario = modificar_saldo_temporario(data_debito.getMonth(),ultima_data,saldo_temporario,this.rentabilidadeMensal)
                    saldo_temporario += this.getDebito(contador_debito)
                    console.log("rendimento total credito: "+saldo_temporario)
                    console.log("====================")

                    ultima_data = data_debito
                    contador_debito += 1
                break
                }
            }
        }
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