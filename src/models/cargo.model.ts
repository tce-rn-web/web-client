import { Usuario } from "./usuario.model"

export class Cargo {
    constructor(
        public usuario?: Usuario,
        public id?: number,
        public descricao?: string
    ) {
        this.usuario = usuario || null
        this.id = id || null
        this.descricao = descricao || null
    }
}