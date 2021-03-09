import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { Prato } from '../../models/prato.model';

@Component({
  selector: 'app-pratocard',
  templateUrl: './pratocard.component.html',
  styleUrls: ['./pratocard.component.css']
})
export class PratoCardComponent implements OnInit {
  @Input() prato: Prato

  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

  apagar(): void {
    // this.app.apagarPrato(this.prato)
  }

}
