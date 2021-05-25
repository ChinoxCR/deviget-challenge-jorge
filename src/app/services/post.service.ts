import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  


  private apiUrl = 'https://www.reddit.com/top/.json?t=all&limit=100';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
