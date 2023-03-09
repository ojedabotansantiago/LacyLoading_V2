import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasesHttpService {

  constructor() { }

  public getCases(): void{
    console.log('hellow cases');
  }
}
