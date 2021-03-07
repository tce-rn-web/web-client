import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

import { Pedido } from 'src/models/pedido.model';
import { Prato } from 'src/models/prato.model';
import { EstadoPedido as Estado } from 'src/enums/estado_pedido.enum';
import { EstadoPedido } from 'src/models/estado_pedido.model';
import { PedidoPrato } from 'src/models/pedido_prato.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  last: string = 'login'
  permissao: string = 'funcionario'
  pedidos: Pedido[] = []

  constructor(private http: HttpClient) {}

  listar(): void {
    this.pedidos.push(new Pedido(1, '1', 'desc', [new PedidoPrato(23, 245, new Prato(10, 'açai', 100.99), 10), new PedidoPrato(null, null, new Prato(10, 'açai', 100.99), 10)], new EstadoPedido(Estado.Cadastrado), 'nao sei'))
    this.pedidos.push(new Pedido(1, '1', 'desc', [new PedidoPrato(null, null, new Prato(10, 'açai', 100.99), 10), new PedidoPrato(null, null, new Prato(10, 'açai', 100.99), 10)], new EstadoPedido(Estado.Finalizado), 'nao sei'))
    this.pedidos.push(new Pedido(1, '1', 'desc', [new PedidoPrato(null, null, new Prato(10, 'açai', 100.99), 10), new PedidoPrato(null, null, new Prato(10, 'açai', 100.99), 10)], new EstadoPedido(Estado.Preparando), 'nao sei'))
    /* this.http.get<Pedido[]>(`${env.URL}/listar`)
      .subscribe(
        (pedidos: Pedido[]) => {
          this.pedidos = pedidos
        },
        (erro: any) => {
          console.log(erro);
        }
      ) */
  }
}
