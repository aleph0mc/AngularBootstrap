import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent as TabSetComp } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css'],
})
export class TabsetComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabSetComp;

  constructor() {}

  ngOnInit(): void {}

  disableEnable(): void {
    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
  }

  activateTabId3(): void {
    this.staticTabs.tabs[3].active = true;
  }
}
