export class Credito {
    constructor(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getValor() {
        return this.valor;
    }
    getData() {
        return this.data;
    }
}
