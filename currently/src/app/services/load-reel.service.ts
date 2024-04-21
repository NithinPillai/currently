import { Injectable } from '@angular/core';
import { Reel } from '../model/Reel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadReelService {

  constructor(private http: HttpClient) { }

  getReels(): Observable<Reel[]> {
    return this.http.get<Reel[]>("../../../assets/data.json")
      .pipe(map((response: any) => response.articles.map((article: any) => ({
        source_name: article.source.name,
        title: article.title,
        url: article.url,
        urlToImage: article.urlToImage,
        likes: 0 // You can set likes to 0 or any default value here
      }))));
  }
}
