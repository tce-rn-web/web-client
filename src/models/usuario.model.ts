import { Cargo } from "./cargo.model";

export class Usuario {
    constructor(
        public id?: number,
        public email?: string,
        public senha?: string,
        public nome?: string,
        public cargo?: Cargo,
        public cargoId?: number,
    ) {
        this.id = id || 0
        this.email = email || null
        this.senha = senha || null
        this.nome = nome || null
        this.cargo = cargo || new Cargo()
        this.cargoId = cargoId || this.cargo?.id || 0
    }
}