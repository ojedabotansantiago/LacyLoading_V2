import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillsHttpService {

  constructor() { }

  /**
   * getBills
   */
  public getBills() {
    console.log('hellow billsHttpService');
    return 'string';
  }
}
