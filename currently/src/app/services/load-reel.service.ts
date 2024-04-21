import { Injectable } from '@angular/core';
import { Reel } from '../model/Reel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoadReelService {

  constructor(private http: HttpClient) { }

  private searchKey: string  = "healthcare";
  private apiUrl: string = `https://newsapi.org/v2/everything?q=${this.searchKey}&apiKey=3990fcc18f674c02b11160f335649c20`;
  



  getReels(): Observable<Reel[]> {
    return this.http.get<Reel[]>("../../../assets/data.json")
      .pipe(map((response: any) => response.articles.map((article: any) => ({
        source_name: article.source.name,
        title: article.title,
        url: article.url,
        urlToImage: article.urlToImage,
        description: article.description,
        likes: 0 // You can set likes to 0 or any default value here
      }))));
  }

  // getReels(): Observable<Reel[]> {

  //   return this.http.get<any>(this.apiUrl).pipe(
  //     map((response: any) => response.articles.map((article: any) => ({
  //       source_name: article.source.name || '',
  //       title: article.title || '',
  //       url: article.url || '',
  //       urlToImage: article.urlToImage || '',
  //       description: article.description || '',
  //       userLiked: false,
  //       likes: 0
  //     })))
  //   );
    
    
  // }
    
    
  }

