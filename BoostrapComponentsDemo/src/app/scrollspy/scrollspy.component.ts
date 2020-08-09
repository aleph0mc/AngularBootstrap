import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scrollspy',
  templateUrl: './scrollspy.component.html',
  styleUrls: ['./scrollspy.component.css'],
})
export class ScrollspyComponent implements OnInit {
  currentSection = 'section1';

  constructor() {}

  ngOnInit(): void {}

  onSectionChange(sectionId: string): void {
    this.currentSection = sectionId;
  }

  scrollTo(section: any): void {
    document.querySelector('#' + section).scrollIntoView();
    this.currentSection = section;
    // console.log('onSectionChange ' + this.currentSection);
  }
}
