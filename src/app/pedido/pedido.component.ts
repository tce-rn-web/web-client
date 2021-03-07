import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  @Input() pedido: Pedido

  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

}
