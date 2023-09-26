import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/posts.model';

@Component({
  selector: 'app-card-message',
  templateUrl: './card-message.component.html',
  styleUrls: ['./card-message.component.scss']
})
export class CardMessageComponent implements OnInit {
  
  @Input() modelPosts: IPost;
  
  ngOnInit(): void {
    this.modelPosts.created = new Date().toString();
  }
  
}
