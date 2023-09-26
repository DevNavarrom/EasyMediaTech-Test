import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { IPost } from 'src/app/models/posts.model';
import { PostsService } from '../../services/posts.service';
import { ResponsePosts } from 'src/app/models/response.model';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  listPost$: Observable<IPost[]> = of([]);

  constructor( private postsService: PostsService ) {}

  ngOnInit(): void {
    this.listPost$ = this.postsService.getAllPosts$().pipe(
      map((value: ResponsePosts<IPost[]>) => value.posts)
    );
  }

  handleSearch(value: string) {
    console.log(value);
    
  }
}
