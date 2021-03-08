import { Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AppService } from '../app.service';
import { PedidoPrato } from 'src/models/pedido_prato.model';
import { Pedido } from 'src/models/pedido.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro_pedido.component.html',
  styleUrls: ['./cadastro_pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {
  @ViewChild('template') private template: TemplateRef<any>
  modalRef: BsModalRef

  pedido: Pedido

  constructor(
    public modalService: BsModalService,
    public router: Router,
    private app: AppService,
    public eRef: ElementRef,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.app.last = 'cadastro_pedido'
    this.pedido = this.app.novoPedido()
  }

  ngAfterViewInit(): void {
    this.openModal()
  }

  openModal(): void {
    let config = {
      class: 'modal-lg',
      keyboard: false,
      animated: true,
      backdrop: true,
      ignoreBackdropClick: true
    }

    this.modalRef = this.modalService.show(this.template, config)
  }

  onClose(): void {
    this.modalRef.hide()
    // this.location.back()
    this.router.navigate(['about'])
  }

  adicionar(): void {
    this.app.adicionarPrato(this.pedido)
  }

  cadastrar(): void {
    this.app.cadastrarPedido()
  }
}
