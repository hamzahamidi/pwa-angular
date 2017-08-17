import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import * as moment from 'moment';
const mdDateTimePicker = require('md-datepicker');

@Component({
  selector: 'app-time-picker',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {
  _end: string;
  _start: string;
  start: any;
  end: any;
  duration: number;
  showResult: boolean;
  showAlertDanger: boolean;
  showAlertWarning: boolean;
  constructor() { }

  ngOnInit() {
    const locale = 'fr';
    moment.locale(locale);
    this.start = new mdDateTimePicker.default({
      cancel: 'Annuler',
      type: 'date',
      future: moment('2099', 'YYYY')
    });
    this.end = new mdDateTimePicker.default({
      cancel: 'Annuler',
      type: 'date',
      future: moment('2099', 'YYYY')
    });
    // add listener start input
    this.start.trigger = document.getElementById('start');
    const _start = document.getElementById('start');
    _start.addEventListener('onOk', (event) => {
      this._start = moment(this.start.time.toISOString()).format('DD/MM/YYYY');
    });
    // add listener end input
    this.end.trigger = document.getElementById('end');
    const _end = document.getElementById('end');
    _end.addEventListener('onOk', (event) => {
      this._end = moment(this.end.time.toISOString()).format('DD/MM/YYYY');
    });
  }
  // select start date
  selectStartTime() {
    this.start.toggle();
  }
  // select end date
  selectEndTime() {
    this.end.toggle();
  }
  calculateDate() {
    const start = moment(this._start, 'DD/MM/YYYY').format();
    const end = moment(this._end, 'DD/MM/YYYY').format();

    if (start !== 'Invalid date' && end !== 'Invalid date') {
      this.showAlertDanger = false;
      this.duration = moment(end).diff(start, 'days');
      this.showResult = true;
      if (this.duration < 0) {
        this.showAlertWarning = true;
        this._start = moment(end).format('DD/MM/YYYY');
        this._end = moment(start).format('DD/MM/YYYY');
      } else {
        this.showAlertWarning = false;
      }
    } else {
      this.showAlertDanger = true;
      this.showResult = false;
    }
  }

}
