import { Prato } from '../models/prato.model';
import { EstadoPedido } from '../models/estado_pedido.model';
import { PedidoPrato } from '../models/pedido_prato.model';

export class Pedido {
    constructor(
        public id?: number,
        public mesa?: string,
        public descricao?: string,
        public dataDoPedido?: string,
        public estadoPedido?: EstadoPedido,
        public estadoPedidoId?: number,
        public pedidosPratos?: PedidoPrato[],
    ) {
        this.id = id || Math.random()
        this.mesa = mesa || null
        this.descricao = descricao || null
        this.dataDoPedido = dataDoPedido || null
        this.estadoPedido = estadoPedido || new EstadoPedido(this)
        this.estadoPedidoId = estadoPedidoId || this.estadoPedido?.id
        this.pedidosPratos = pedidosPratos || [new PedidoPrato(this)]
    }

    public static qtdTotal(pedido: Pedido): number {
        let qtd: number = 0

        pedido?.pedidosPratos?.forEach((prato) => {
            qtd += prato?.quantidade
        })

        return qtd
    }

    public static precoTotal(pedido: Pedido): number {
        let preco: number = 0

        pedido?.pedidosPratos?.forEach((prato) => {
            preco += prato?.quantidade * prato?.prato?.preco
        })

        return preco
    }
}