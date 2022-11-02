import { Post } from './../models/post';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://localhost:3000/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post> {
    return this.httpClient.get<Post>(this.url);
  }



}
