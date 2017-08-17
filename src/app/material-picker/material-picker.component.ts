import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-material-picker',
  animations: [
    trigger(
      'enterAnimationVetically', [
        transition(':enter', [
          style({ transform: 'translateY(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateY(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateY(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
  templateUrl: './material-picker.component.html',
  styleUrls: ['./material-picker.component.css']
})
export class MaterialPickerComponent implements OnInit {
  showAlertWarning: boolean;
  showResult: boolean;
  duration: number;
  showAlertDanger: boolean;
  start: any;
  end: any;
  _start: string;
  _end: string;
  constructor() { }

  ngOnInit() {
  }

  calculateDate() {
    const start = this._start;
    const end = this._end;

    if (start && end ) {
      this.showAlertDanger = false;
      this.duration = moment(end).diff(start, 'days');
      this.showResult = true;
      if (this.duration < 0) {
        this.showAlertWarning = true;
        this._start = end;
        this._end = start;
      } else {
        this.showAlertWarning = false;
      }
    } else {
      this.showAlertDanger = true;
      this.showResult = false;
    }
  }
}
