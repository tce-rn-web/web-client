import { EstadoPedido as Estado } from '../enums/estado_pedido.enum';

export class EstadoPedido {
    public idEstado: number
    public nome: string

    constructor(idEstado: number, nome?: string) {
        this.idEstado = idEstado
        this.nome = nome || Estado[idEstado]
    }

    public static estado(id: number): string {
        return Estado[id]
    }
}