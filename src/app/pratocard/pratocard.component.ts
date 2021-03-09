import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { EstadoPedido as E } from '../../enums/estado_pedido.enum';
import { Prato } from '../../models/prato.model';

@Component({
  selector: 'app-pratocard',
  templateUrl: './pratocard.component.html',
  styleUrls: ['./pratocard.component.css']
})
export class PratoCardComponent implements OnInit {
  @Input() prato: Prato
  e = E

  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

  acao(estado: E): void {
    this.app.acao(this.prato, estado)
  }

}
