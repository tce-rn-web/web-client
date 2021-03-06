import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-quit',
  templateUrl: './quit.component.html',
  styleUrls: ['./quit.component.css']
})
export class QuitComponent implements OnInit {

  constructor(public app: AppService, public router: Router) { }

  ngOnInit(): void {
    this.app.login = false
    this.router.navigate(['login'])
  }

}
