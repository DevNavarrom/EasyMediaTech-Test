import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() callbackData: EventEmitter<any> = new EventEmitter<any>();

  words: string = '';

  handleSearch(term: any): void {
    if (term.length >= 3) {
      this.callbackData.emit(term);
    }
  }

}
