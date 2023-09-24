import { Component, Input } from '@angular/core';
import { IMessages } from 'src/app/models/message.model';

@Component({
  selector: 'app-card-message',
  templateUrl: './card-message.component.html',
  styleUrls: ['./card-message.component.scss']
})
export class CardMessageComponent {

  @Input() modelMessage: IMessages;
  
}
