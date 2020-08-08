import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  // Without the return type (void) the compiler can give the following warning:
  // expected call-signature: 'method-name' (in this case ngOnInit) to have a typedef
  ngOnInit(): void {}

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
}
