import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMessageComponent } from './components/card-message/card-message.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';



@NgModule({
  declarations: [
    CardMessageComponent,
    CustomModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardMessageComponent,
    CustomModalComponent
  ]
})
export class SharedModule { }
