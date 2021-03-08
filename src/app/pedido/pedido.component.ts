import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { EstadoPedido as E } from '../../enums/estado_pedido.enum';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  @Input() pedido: Pedido
  e = E

  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

}
