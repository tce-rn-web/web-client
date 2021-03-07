export class Log {
    constructor(
        public id: number,
        public idUsuario: number,
        public acao: string,
        public objeto: string,
        public campo: string,
        public valorAntigo: string,
        public valorNovo: string,
        public data: string
    ) {}
}