import { Prato } from '../models/prato.model';
import { EstadoPedido } from '../models/estado_pedido.model';
import { PedidoPrato } from '../models/pedido_prato.model';

export class Pedido {
    constructor(
        public id: number,
        public mesa: string,
        public descricao: string,
        public pedidosPratos: PedidoPrato[],
        public estado: EstadoPedido,
        public dataDoPedido: string
    ) {}
}