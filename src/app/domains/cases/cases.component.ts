import { Component, OnInit } from '@angular/core';
import { CasesHttpService } from './ports/cases-http.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.sass']
})
export class CasesComponent implements OnInit {

  constructor(private casesHttpService: CasesHttpService) { }

  ngOnInit(): void {
    this.casesHttpService.getCases();
  }

}
