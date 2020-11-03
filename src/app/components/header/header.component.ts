import { Component, OnInit } from '@angular/core';
import { DateServiceService } from "../../date-service.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  
  Date;
  constructor(private myService: DateServiceService) { }

  ngOnInit(): void {
    this.Date = this.myService.todayDate()
  }
  months = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
}
