import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/models/posts.model';
import { Response } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Response<IPost[]>> {
    return this.http.get<Response<IPost[]>>(this.URL+'posts/')
  }

  getPostsByUser(id: string): Observable<Response<IPost[]>> {
    return this.http.get<Response<IPost[]>>(this.URL+'posts/'+id);
  }

  addNewPost(post: IPost): Observable<Response<IPost>> {
    return this.http.post<Response<IPost>>(this.URL, {post});
  }
  
}
