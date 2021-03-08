import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(
    public router: Router,
    public app: AppService
  ) { }

  ngOnInit(): void {
    this.app.last = 'sobre'
    this.app.autenticar()
  }

}
