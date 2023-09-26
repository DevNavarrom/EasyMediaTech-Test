import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from 'src/app/models/posts.model';
import { ResponsePosts } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  getAllPosts$(): Observable<ResponsePosts<IPost[]>> {
    return this.http.get<ResponsePosts<IPost[]>>(`${this.URL}posts/`).pipe(
      map((data: ResponsePosts<IPost[]>) => data )
    );
  }

  getPostsByUser(id: string): Observable<ResponsePosts<IPost[]>> {
    return this.http.get<ResponsePosts<IPost[]>>(`${this.URL}posts/${id}`);
  }

  addNewPost(post: IPost): Observable<ResponsePosts<IPost>> {
    return this.http.post<ResponsePosts<IPost>>(`${this.URL}posts/add`, {post});
  }
  
}
