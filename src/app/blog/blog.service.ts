import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  @Cacheable({ maxCacheCount: 10 })
  public get(category: string, id: string): Observable<string> {
    return this.http.get(`/assets/articles/${category}/${id || 'index'}.html`, {
      responseType: 'text'
    });
  }

}
