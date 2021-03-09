import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { Prato } from '../../models/prato.model';

@Component({
  selector: 'app-pratolistar',
  templateUrl: './pratolistar.component.html',
  styleUrls: ['./pratolistar.component.css']
})
export class PratoListarComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit(): void {
   this.carregar()
  }

  getPratos(): Prato[] {
    return this.app.pratos
  }

  carregar(): void {
    this.app.autenticar()
  }
}
