import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills-detail',
  templateUrl: './bills-detail.component.html',
  styleUrls: ['./bills-detail.component.sass']
})
export class BillsDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('laded BillsDetailComponent');
  }

}
