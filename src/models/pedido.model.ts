import { Prato } from '../models/prato.model';
import { EstadoPedido } from '../models/estado_pedido.model';
import { EstadoPedido as Estado } from '../enums/estado_pedido.enum';
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
        this.id = id || 0
        this.mesa = mesa || null
        this.descricao = descricao || null
        this.dataDoPedido = dataDoPedido || null
        this.estadoPedido = estadoPedido || null
        this.estadoPedidoId = estadoPedidoId || this.estadoPedido?.id || 0
        this.pedidosPratos = pedidosPratos || []
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

    public static DTO(pedido: Pedido): Pedido {
        let novo = {
            'mesa': pedido.mesa,
            'descricao': pedido.descricao,
            'pedidosPratos': []
        }

        pedido.pedidosPratos.forEach((x) => {
            novo.pedidosPratos.push({
                'pratoId': x?.prato?.id,
                'quantidade': x?.quantidade
            })
        })

        return novo
    }
}