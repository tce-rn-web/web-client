import { EstadoPedido as Estado } from '../enums/estado_pedido.enum';
import { Pedido } from './pedido.model';

export class EstadoPedido {
    constructor(
        public pedido?: Pedido,
        public id?: number,
        public nome?: string
    ) {
        this.pedido = pedido || null
        this.id = id || Estado.Cadastrado
        this.nome = nome || Estado[id]
    }

    public static estado(id: number): string {
        return Estado[id]
    }
}