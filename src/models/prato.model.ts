import { PedidoPrato } from "./pedido_prato.model"

export class Prato {
    constructor(
        public pedidosPratos?: PedidoPrato,
        public id?: number,
        public nome?: string,
        public preco?: number
    ) {
        this.pedidosPratos = pedidosPratos || null
        this.id = id || 0
        this.nome = nome || null
        this.preco = preco || null
    }

    public static DTO(prato: Prato): Prato {
        let p = {
            'nome': prato?.nome,
            'preco': prato?.preco
        }

        return p
    }
}