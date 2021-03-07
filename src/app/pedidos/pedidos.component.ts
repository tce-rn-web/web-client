import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit(): void {
   this.carregar()
  }

  getPedidos(): Pedido[] {
    return this.app.pedidos
  }

  carregar(): void {
    this.app.listar()
  }
}
