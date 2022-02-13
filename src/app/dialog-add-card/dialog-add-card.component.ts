import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { Moment } from 'moment';


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YY',
  },
  display: {
    dateInput: 'MM/YY',
    monthYearLabel: 'MM YY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM YY',
  },
};

@Component({
  selector: 'app-dialog-add-card',
  templateUrl: './dialog-add-card.component.html',
  styleUrls: ['./dialog-add-card.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DialogAddCardComponent implements OnInit {
  date = new FormControl(moment());
  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
