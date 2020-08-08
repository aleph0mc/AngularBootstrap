import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  constructor(private alertify: AlertifyService) {}

  ngOnInit(): void {}

  showWithSettings(): void {
    this.alertify.settings(
      true,
      true,
      false,
      'flipx',
      'The Title',
      'This is alert is with settings'
    );
  }

  showConfirm(): void {
    this.alertify.confirm('Are you sure you want to confirm?', () => {
      this.alertify.message('Operation approved');
    });
  }

  showError(): void {
    this.alertify.error('This operation failed');
  }

  showSuccess(): void {
    this.alertify.success('This operation succeeded');
  }

  showWarning(): void {
    this.alertify.warning('This is a warning');
  }
}
