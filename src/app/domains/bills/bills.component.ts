import { Component, OnInit } from '@angular/core';
import { BillsHttpService } from './ports/bills-http.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.sass']
})
export class BillsComponent implements OnInit {

  constructor(private BillsHttpService: BillsHttpService) { }

  ngOnInit(): void {
    this.BillsHttpService.getBills()
  }

}
