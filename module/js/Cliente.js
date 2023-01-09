import { Pessoa } from "./Pessoa.js";
import { ContaCorrente } from "./ContaCorrente.js";
export class Cliente extends Pessoa {
    constructor(nome, cpf, telefone, vip, endereco, conta) {
        super(nome, cpf, telefone);
        this.enderecos = [];
        this.contas = [];
        this.vip = vip;
        this.enderecos.push(endereco);
        this.contas.push(conta);
    }
    setEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    getEndereco(index) {
        return this.enderecos[index];
    }
    setConta(conta) {
        this.contas.push(conta);
    }
    listarEndereco() {
        this.enderecos.forEach(endereco => console.log(endereco));
    }
    listarConsta() {
        this.contas.forEach(conta => {
            console.log(conta);
        });
    }
    depositar(numero_conta, valor, date) {
        this.contas.forEach(conta => {
            if (conta.getNumero() == numero_conta) {
                conta.depositar(valor, date);
                return;
            }
        });
    }
    sacar(numero_conta, valor, date) {
        this.contas.forEach(conta => {
            if (conta.getNumero() == numero_conta) {
                conta.sacar(valor, date);
                return;
            }
        });
    }
    transferir(numero_conta, cliente, numero_conta_destino, valor, date) {
        this.contas.forEach(conta_cliente => {
            if (conta_cliente.getNumero() == numero_conta) {
                if (conta_cliente instanceof ContaCorrente) {
                    cliente.contas.forEach(conta_destino => {
                        if (conta_destino.getNumero() == numero_conta_destino) {
                            conta_cliente.transferir(conta_destino, valor, date);
                        }
                    });
                }
                else {
                    console.log("Conta cliente nao é uma conta corrente.");
                }
            }
            else {
                console.log("Conta nao encontrada!");
            }
        });
    }
}
