import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hourly-dislay',
  templateUrl: './hourly-dislay.component.html',
  styleUrls: ['./hourly-dislay.component.css']
})

export class HourlyDislayComponent implements OnInit {

  // Doing property data binding from parent to child component
  @Input() hourlyData: any;

  constructor() { }
  ngOnInit() {}

}
