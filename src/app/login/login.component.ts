import { Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('template') private template: TemplateRef<any>
  modalRef: BsModalRef

  constructor(
    public modalService: BsModalService,
    public router: Router,
    public app: AppService,
    public eRef: ElementRef,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.app.last = 'login'
  }

  ngAfterViewInit(): void {
    this.openModal()
  }

  openModal(): void {
    let config = {
      class: 'modal-sm',
      keyboard: false,
      animated: true,
      backdrop: true,
      ignoreBackdropClick: true
    }

    this.modalRef = this.modalService.show(this.template, config)
    setTimeout(() => this.app.autenticar(this.modalRef), 100)
  }

  onClose() {
    this.modalRef.hide()
    // this.location.back()
    this.router.navigate(['sobre'])
  }

  login(): void {
    this.app.login(this.modalRef)
  }
}
