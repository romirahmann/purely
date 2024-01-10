import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css'],
})
export class ModalSuccessComponent {
  @Input() receivedText: any;
}
