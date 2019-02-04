import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hourly-dislay',
  templateUrl: './hourly-dislay.component.html',
  styleUrls: ['./hourly-dislay.component.css']
})
export class HourlyDislayComponent implements OnInit {

  @Input() hourlyData: any;

  constructor() { }

  ngOnInit() {

  }



}
