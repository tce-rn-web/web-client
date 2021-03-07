import { Prato } from '../models/prato.model';

export class Pedido {
    constructor(
        public id: number,
        public mesa: string,
        public descricao: string,
        public pratos: Prato[],
        public idStatus: number,
        public dataDoPedido: string
    ) {}
}