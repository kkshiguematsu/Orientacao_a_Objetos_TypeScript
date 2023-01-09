import { Pessoa } from "../js/Pessoa.js";
import { Cliente } from "../js/Cliente.js";
import { Funcionario } from "../js/Funcionario.js";
import { Endereco } from "./Endereco.js";

import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

// Aplicação 1
function aplicacao_1(){
    const funcionario_1 = new Funcionario("kassiano",123456789,2199999999,2000)
    funcionario_1.adicionaCargo("gerente")
    
    const funcionario_2 = new Funcionario("carlos",123456789,2199999999,2000)
    funcionario_2.adicionaCargo("atendente")

    console.log(funcionario_1)
    console.log(funcionario_2)
}

// Aplicacao 2
function aplicacao_2(){
    const endereco = new Endereco("85850000","aaaaaaa","111","ap2","Sao Paulo","sp")
    const cliente = new Cliente("kassiano",123456789,2199999999,true,endereco)
    cliente.setEndereco(new Endereco("85850000","aaaaaaa","111","ap2","Sao Paulo","sp"))
    cliente.setEndereco(new Endereco("85850000","aaaaaaa","111","ap2","Sao Paulo","sp"))
    cliente.listarEndereco()

} 

// Aplicação 3
function aplicacao_3(){
    const endereco = new Endereco("85850000","aaaaaaa","111","ap2","Sao Paulo","sp")
    const conta_corrente = new ContaCorrente(1000,"777")
    const cliente = new Cliente("kassiano",123456789,2199999999,true,endereco,conta_corrente)
    
    cliente.depositar("777",100,new Date("2023-01-07"))
    cliente.depositar("777",100,new Date("2023-01-07"))
    cliente.depositar("777",100,new Date("2023-01-07"))
    
    cliente.sacar("777",50,new Date("2023-01-07"))
    console.log("Saldo atual: "+ conta_corrente.calcularSaldo())
}

function aplicacao_4(){
    const conta_corrente = new ContaCorrente(500,"777")
    const cliente1 = new Cliente("kassiano",123456789,2199999999,true,null,conta_corrente)
    cliente1.depositar("777",1000,new Date("2023-01-07"))

    const conta_poupanca = new ContaPoupanca(1,"888")
    const cliente2 = new Cliente("carlos",123456789,2199999999,true,null,conta_poupanca)
    cliente2.depositar("888",1000,new Date("2023-01-07"))

    cliente1.transferir("777",cliente2,"888",500,new Date("2023-01-07"))

    console.log(conta_corrente.calcularSaldo())
    console.log(conta_poupanca.calcularSaldo())
}

function aplicacao_5(){
    const conta_poupanca = new ContaPoupanca(0.01,"888")

    conta_poupanca.depositar(200,new Date("01/01/2022"))
    conta_poupanca.depositar(200,new Date("02/01/2022"))
    conta_poupanca.depositar(200,new Date("03/01/2022"))
    conta_poupanca.depositar(200,new Date("04/01/2022"))
    conta_poupanca.depositar(200,new Date("05/01/2022"))
    conta_poupanca.depositar(200,new Date("06/01/2022"))
    conta_poupanca.depositar(200,new Date("07/01/2022"))
    conta_poupanca.depositar(200,new Date("08/01/2022"))
    conta_poupanca.depositar(200,new Date("09/01/2022"))
    conta_poupanca.depositar(200,new Date("10/01/2022"))
    conta_poupanca.depositar(200,new Date("11/01/2022"))
    conta_poupanca.depositar(200,new Date("12/01/2022"))

    conta_poupanca.sacar(100,new Date("03/05/2022"))
    conta_poupanca.sacar(200,new Date("07/08/2022"))

    console.log("Rendimento final: "+ conta_poupanca.calacularRendimento())
}

// Lista de aplicações
// aplicacao_1()
// aplicacao_2()
// aplicacao_3()
// aplicacao_4()
// aplicacao_5()