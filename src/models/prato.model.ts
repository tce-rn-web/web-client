import { PedidoPrato } from "./pedido_prato.model"

export class Prato {
    constructor(
        public pedidosPratos?: PedidoPrato,
        public id?: number,
        public nome?: string,
        public preco?: number
    ) {
        this.pedidosPratos = pedidosPratos || null
        this.id = id || Math.random()
        this.nome = nome || null
        this.preco = preco || null
    }
}