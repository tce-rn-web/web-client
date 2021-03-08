import { Prato } from '../models/prato.model';
import { EstadoPedido } from '../models/estado_pedido.model';
import { Pedido } from './pedido.model';

export class PedidoPrato {
    constructor(
        public pedido?: Pedido,
        public pedidoId?: number,
        public prato?: Prato,
        public pratoId?: number,
        public quantidade?: number,
    ) {
        this.pedido = pedido || null
        this.pedidoId = pedidoId || this.pedido?.id || 0
        this.quantidade = quantidade || 1
        this.prato = prato || null
        this.pratoId = pratoId || this.prato?.id || 0
    }
}