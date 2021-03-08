import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	isCollapsed: boolean = true
  titulo: string = 'Restaurante'

  constructor(public app: AppService) { }

  ngOnInit(): void {
  }

}
