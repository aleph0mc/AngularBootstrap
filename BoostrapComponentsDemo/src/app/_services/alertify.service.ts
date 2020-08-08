import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs'; // in angular project folder run: npm install alertifyjs

@Injectable()
export class AlertifyService {
  constructor() {}

    settings(
        closable: boolean,
        resizable: boolean,
        movable: boolean,
        transition: string,
        title: string,
        message: string
    ): void {
        alertify.alert().setting({
            closable,
            resizable,
            movable,
            transition,
            title,
            message
        }).show();
    }

  confirm(message: string, okCallback: () => any): void {
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      } else {
      }
    });
  }

  success(message: string): void {
    alertify.success(message);
  }

  error(message: string): void {
    alertify.error(message);
  }

  warning(message: string): void {
    alertify.warning(message);
  }

  message(message: string): void {
    alertify.message(message);
  }
}
