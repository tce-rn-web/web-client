import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  last: string = 'home'
  login: boolean = true

  constructor() {}
}
