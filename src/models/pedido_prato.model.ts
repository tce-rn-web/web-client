import { Prato } from '../models/prato.model';
import { EstadoPedido } from '../models/estado_pedido.model';

export class PedidoPrato {
    constructor(
        public idPedido: number,
        public idPrato: number,
        public prato: Prato,
        public quantidade: number
    ) {}
}