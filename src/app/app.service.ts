import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  last: string = 'login'
  permissao: string = 'funcionario'

  constructor() {}
}
