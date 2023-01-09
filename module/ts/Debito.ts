export class Debito{
    constructor(
        private readonly valor: number,
        private readonly data: Date
    ){}

    getValor():number {
        return this.valor
    }

    getData(): Date{
        return this.data
    }
}