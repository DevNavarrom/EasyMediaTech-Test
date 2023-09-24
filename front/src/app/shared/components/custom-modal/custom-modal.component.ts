import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeNotification } from 'src/app/utils/types';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {

  @Output() handleOpenEvent = new EventEmitter<boolean>();
  @Input() typeMessage: TypeNotification;
  @Input() message: string;

  handleClose(): void {
    this.handleOpenEvent.emit(false);
  }

}
