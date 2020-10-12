import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  customDateFormat(dt: Date): string {
    // adjust 0 before single digit date
    const date = ('0' + dt.getDate()).slice(-2);

    // current month
    const month = ('0' + (dt.getMonth() + 1)).slice(-2);

    // current year
    const year = dt.getFullYear();

    return date + '/' + month + '/' + year;
  }
}
