import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { PedidoPrato } from '../../models/pedido_prato.model'

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements OnInit {
  @Input() prato: PedidoPrato

  constructor(public app: AppService) { }

  ngOnInit(): void {
    this.app.last = 'prato'
  }

  remover(): void {
    this.app.removerPrato(this.prato)
  }
}
