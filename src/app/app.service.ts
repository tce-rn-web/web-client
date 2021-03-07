import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

import { Pedido } from 'src/models/pedido.model';
import { Prato } from 'src/models/prato.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  last: string = 'login'
  permissao: string = 'funcionario'
  pedidos: Pedido[] = []

  constructor(private http: HttpClient) {}

  listar(): void {
    this.pedidos.push(new Pedido(1, '1', 'desc', [new Prato(10, 'açai', 100.99), new Prato(10, 'bala', 10.99)], 1, 'nao sei'))
    this.pedidos.push(new Pedido(1, '1', 'desc', [new Prato(10, 'açai', 100.99), new Prato(10, 'bala', 10.99)], 1, 'nao sei'))
    this.pedidos.push(new Pedido(1, '1', 'desc', [new Prato(10, 'açai', 100.99), new Prato(10, 'bala', 10.99)], 1, 'nao sei'))
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
