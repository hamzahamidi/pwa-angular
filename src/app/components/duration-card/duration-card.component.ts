import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-duration-card',
  templateUrl: './duration-card.component.html',
  styleUrls: ['./duration-card.component.css']
})
export class DurationCardComponent implements OnChanges {
  @Input() duration;
  minutes: number;
  houres: number;
  restWeek: number;
  week: number;
  day: any;
  year: any;
  restYear: any;
  constructor() { }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const numberDays = Math.abs(parseInt(changes.duration.currentValue, 10));
    this.day = numberDays;
    this.year = Math.floor(numberDays / 365);
    this.restYear = numberDays % 365;
    this.week = Math.floor(numberDays / 7);
    this.restWeek = numberDays % 7;
    this.houres = numberDays * 24;
    this.minutes = numberDays * 24 * 60;
  }

}
