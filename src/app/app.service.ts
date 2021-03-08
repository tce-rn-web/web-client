import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

import { Pedido } from 'src/models/pedido.model';
import { Prato } from 'src/models/prato.model';
import { EstadoPedido as E } from 'src/enums/estado_pedido.enum';
import { EstadoPedido } from 'src/models/estado_pedido.model';
import { PedidoPrato } from 'src/models/pedido_prato.model';
import { Usuario } from 'src/models/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  last: string = 'login'
  permissao: string = 'anonimo'
  usuario: Usuario = new Usuario()
  pratos: Prato[] = [
    new Prato(null, null, 'Pastel', 2.00),
    new Prato(null, null, 'Bolo', 15.00),
    new Prato(null, null, 'Suco de Uva', 3.00),
    new Prato(null, null, 'Coxinha', 0.99),
    new Prato(null, null, 'Salada de Frutas', 2.98),
  ]
  pedidos: Pedido[] = [
    new Pedido(null, '02', '', '2002/02/11', new EstadoPedido(null, E.Entregando), null),
    new Pedido(),
    new Pedido(),
  ]

  constructor(
    public router: Router,
    private http: HttpClient
  ) {}

  novoPedido(): Pedido {
    let pedido = new Pedido()
    this.pedidos.unshift(pedido)
    return pedido
  }

  adicionarPrato(pedido: Pedido): void {
    this.pedidos[this.pedidos.findIndex(x => x.id == pedido.id)].pedidosPratos.push(new PedidoPrato(pedido))
  }

  removerPrato(prato: PedidoPrato): void {
    let pedido = prato.pedido
    pedido.pedidosPratos = pedido.pedidosPratos.filter(x => x.pratoId != prato.pratoId)
  }

  acao(pedido: Pedido, estado: E): void {
    let p = this.pedidos[this.pedidos.findIndex(x => x.id == pedido.id)]
    EstadoPedido.setEstado(p, estado)
  }

  cadastrarPedido(): void {
    console.log('chegou no Service')
  }

  listar(): void {
    // this.pedidos.push(new Pedido(1, '01', 'desc', [new PedidoPrato(23, 245, new Prato(10, 'Pastel', 2.00), 3), new PedidoPrato(null, null, new Prato(10, 'Açai', 5.00), 7)], new EstadoPedido(Estado.Cadastrado), '2000-01-08 08:32:12.000000'))
    // this.pedidos.push(new Pedido(1, '14', 'desc', [new PedidoPrato(null, null, new Prato(10, 'Suco de Laranja', 3.50), 1), new PedidoPrato(null, null, new Prato(10, 'Bolo', 15.99), 3)], new EstadoPedido(Estado.Entregue), '2000-10-07 04:26:57'))
    // this.pedidos.push(new Pedido(1, '07', 'desc', [new PedidoPrato(null, null, new Prato(10, 'Bala', 0.25), 25), new PedidoPrato(null, null, new Prato(10, 'Coxinha', 0.97), 10)], new EstadoPedido(Estado.Preparando), '10/04/2021 10:35:15'))
    this.http.get<Pedido[]>(`${env.URL}/pedido/listar?incluirPratos=true`)
      .subscribe(
        (pedidos: Pedido[]) => {
          this.pedidos = pedidos
        },
        (erro: any) => {
          console.log(erro);
        }
      )
  }

  cadastrar(modal: any): void {
    this.http.post<Usuario>(`${env.URL}/cadastro`, this.usuario)
      .subscribe(
        (e: any) => {
          console.log(e)
          alert("Cadastrado com sucesso!")
          modal.hide()
          this.router.navigate(['sobre'])
        },
        (erro: any) => {
          console.error(erro)
        }
      )
  }

  login(modal: any): void {
    this.http.post<Usuario>(`${env.URL}/login`, this.usuario)
      .subscribe(
        (e: any) => {
          this.permissao = 'funcionario'
          console.log(e)
          localStorage.setItem('token', e.token)
          alert("Logado com sucesso!")
          modal.hide()
          this.router.navigate(['sobre'])
        },
        (erro: any) => {
          console.error(erro)
        }
      )
  }
}
