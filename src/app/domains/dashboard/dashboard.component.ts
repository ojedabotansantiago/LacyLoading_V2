import { Component, OnInit } from '@angular/core';
import { DashboardHttpService } from './ports/dashboard-http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardHttpService: DashboardHttpService) { }

  ngOnInit(): void {
    console.log('DashboardComponent')
  }

}
