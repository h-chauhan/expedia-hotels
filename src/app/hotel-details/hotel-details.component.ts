import { Component, OnInit, Input } from '@angular/core';

import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

}
