import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilitiesService } from '../_services/utilities.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;
  ddlItems: any = [
    { name: 'Rome', value: 1 },
    { name: 'Milan', value: 2 },
    { name: 'Valletta', value: 3 },
    { name: 'Turin', value: 4 },
  ];

  constructor(private fb: FormBuilder, private utilities: UtilitiesService) {}

  ngOnInit(): void {
    this.initializeReactiveForm();
  }

  initializeReactiveForm(): void {
    this.reactiveForm = this.fb.group({
      ddlSelected: [''],
      dateDMY: [new Date()],
    });
  }

  submitForm(): void {
    console.log('ddlValue' + this.reactiveForm.get('ddlSelected').value);
    const dateMDY = this.reactiveForm.get('dateDMY').value;
    console.log(this.utilities.customDateFormat(dateMDY));
  }
}
